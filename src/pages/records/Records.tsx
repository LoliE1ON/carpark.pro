import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayHeader } from "../../store/Config/actions";
import { Header } from "../../components/house/Header";
import { RootState } from "../../store/reducers";
import { getListRecords } from "../../store/Record/actions";
import { TableFox } from "../../components/table/Fox";
import { EditRecord } from "../../components/house/EditRecord";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const Records = () => {
  const dispatch = useDispatch();
  let { date } = useParams();
  const lang = useLanguage();

  const records = useSelector((state: RootState) => state.record.list);

  // Toggle Header
  useEffect(() => {
    dispatch(setDisplayHeader(false));
    return () => {
      dispatch(setDisplayHeader(true));
    };
  }, [dispatch]);

  // Select rows if change date
  useEffect(() => {
    dispatch(getListRecords(date));
  }, [dispatch, date]);

  return (
    <div>
      <Header />

      {records.length ? (
        <div className="container">
          <TableFox
            id="house"
            columns={[
              {
                title: lang("room"),
                type: "string",
                name: "room",
              },
              {
                title: lang("name"),
                type: "string",
                name: "name",
              },
              {
                title: lang("lastName"),
                type: "string",
                name: "lastName",
              },
              {
                title: lang("mobile"),
                type: "string",
                name: "mobile",
              },
              {
                title: lang("totalPeople"),
                type: "int",
                name: "totalPeople",
              },
              {
                title: lang("arrivalTime"),
                type: "string",
                name: "arrivalTime",
              },
              {
                title: lang("departureTime"),
                type: "string",
                name: "departureTime",
              },
              {
                title: lang("sum"),
                type: "float",
                name: "money",
              },
              {
                title: lang("paymentState"),
                type: "int",
                name: "paymentState",
              },
              {
                title: lang("additionally"),
                type: "string",
                name: "additionally",
              },
              {
                title: lang("numberDinners"),
                type: "int",
                name: "numberDinners",
              },
              {
                title: lang("numberMidday"),
                type: "int",
                name: "numberMidday",
              },
              {
                title: lang("numberBreakfasts"),
                type: "int",
                name: "numberBreakfasts",
              },
            ]}
            data={records}
            sort={{
              name: "room",
              sort: "desc",
            }}
            EditComponent={EditRecord}
          />
        </div>
      ) : (
        <div className="m-2">
          <div className="toast toast-error ">{lang("noneRecords")}!</div>
        </div>
      )}
    </div>
  );
};
