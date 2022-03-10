import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";

const RowComponent = ({ title, onSelect, index, checked ,onDelete}) => {

  return (
    <>
      <ListGroup.Item>
        <div>
          <Row>

            <Col xs={1}>
              <input
                checked={checked}
                type="checkbox"
                onClick={() => {
                  onSelect(index)
                }}
                style={{ height: "20px", width: "20px" }}
              />
            </Col>
            <Col xs={10}>{title}</Col>
            <Col
              xs={1}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <CloseButton onClick={()=>onDelete(index)}/>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default RowComponent;
