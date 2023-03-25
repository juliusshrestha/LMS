import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

import Divider from "@material-ui/core/Divider";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PopUpDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const handleClickOpen = () => {
    setOpen(true);
    sessionStorage.setItem(" open", false);

    setFullWidth(true);
    setMaxWidth("md");
    //console.log("in eventhandler")
  };

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("open", true);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  React.useEffect(() => {
    const notice = sessionStorage.getItem(" open");
    // console.log("this is from use effect", props.getVisitState());
    if (props.getVisitState() === 0 && !notice) {
      handleClickOpen("body");
    }

    props.changeVisitState();

    //console.log("in use effect of handle Click Open")
  }, []);
  // console.log(props.data);
  const key = props.data.lenght - 1;
  // console.log(key);
  const popUpStyle = {
    //color: "white",
    //backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Muli",
    color: "black",
  };

  return props.data.length > 0 ? (
    <div>
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}

      <Dialog
        scroll={"body"}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <div
          style={{
            float: "right",
          }}
        >
          <Button onClick={handleClose} color="primary">
            <HighlightOffIcon style={{ color: "black" }} />
          </Button>
        </div>
        <DialogContent
          style={{ overflowY: "clip" }}
          dividers={scroll === "body"}
        >
          {props.data
            .sort((a, b) => b.id - a.id)
            .slice(0, 1)

            .map((single) => {
              return (
                <DialogContentText
                  data={single}
                  key={key}
                  id="max-width-dialog-title"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                  style={popUpStyle}
                >
                  <>
                    {/* {console.log(single)} */}
                    <h4>{single.title}</h4>
                    <p>{single.published_date.substring(0, 10)}</p>
                    {single.image && (
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          textAlign: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href={process.env.PUBLIC_URL + `/notice/${single.id}`}
                        >
                          <img
                            style={{
                              height: "100%",
                              width: "100%",
                              alignContent: "center",
                              objectFit: "cover",
                            }}
                            src={single.image}
                          ></img>
                        </a>
                      </div>
                    )}
                    {single.description && (
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;{single.description}</div>
                    )}
                    <Divider />
                  </>
                </DialogContentText>
              );
            })}
        </DialogContent>
      </Dialog>
    </div>
  ) : null;
};

PopUpDialog.propTypes = {
  getVisitState: PropTypes.func,
  changeVisitState: PropTypes.func,
  data: PropTypes.array,
};
export default PopUpDialog;
