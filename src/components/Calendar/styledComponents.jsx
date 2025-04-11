import styled from "styled-components";

export const CalendarTitle = styled.p`
  padding: 0;
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarNavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavActionIcon = styled.svg`
  fill: #94a6be;
`;

export const NavActionIconPath = styled.path``;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  opacity: ${({ $otherMonth }) => $otherMonth && 0};
  font-weight: ${({ $current }) => $current && 700};
  &:hover {
    background-color: ${({ $cellDay }) =>
      $cellDay && "${({ theme }) => theme.colors.background}"};
  }
  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const DatePickValue = styled.input``;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarPeriodP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarPeriodDateControl = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;
