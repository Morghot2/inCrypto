import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState, useEffect } from "react";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search for crypto"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></Input>
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((element) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={element.id}>
            <Link to={`/crypto/${element.id}`}>
              <Card
                title={`${element.rank}. ${element.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={element.iconUrl}
                    alt={element.name}
                  ></img>
                }
                hoverable
              >
                <p>Price: ${millify(element.price)}</p>
                <p>MarketCap: ${millify(element.marketCap)}</p>
                <p>Dail Change: ${millify(element.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
