import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 320px;

  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #e7e7e7;

  font-size: 14px;
`;

export const TransactionThead = styled.thead`
  background-color: #dddddd;
  text-transform: uppercase;
`;

export const TransactionTr = styled.tr`
  :nth-of-type(even) {
    background-color: #ffffff;
  }
`;

export const TransactionTh = styled.th`
  padding: 8px 15px;
`;

export const TransactionBody = styled.tbody`
  text-align: center;
  background-color: #f1f1f1;
`;

export const TransactionTd = styled.td`
  padding: 8px 15px;

  :first-of-type {
    text-align: left;
  }
`;
