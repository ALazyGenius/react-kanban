import { connect } from "react-redux";
import CreateList from "../components/CreateList";
import VARIABLE from "../CONSTANTS";

const defaultListData = {
  title: "",
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList(listData) {
      const listId = Date.now().toString();
      const list = {
        id: listId,
        ...defaultListData,
        ...listData,
      };
      dispatch({
        type: VARIABLE.LIST_CREATE,
        payload: {
          list,
          listId,
        },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateList);
