import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Sallybus10 from "../../questions/10th.json";
import Sallybus9 from "../../questions/9th.json";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

const StudentDetailsEntry = (props) => {
  const { student } = props;
  const [mins, setMins] = useState(0),
    [questions, setQuestions] = useState([]),
    [currentIndex, setCurrentIndex] = useState(0),
    [currentQIndex, setCurrentQIndex] = useState(0),
    [selectedAnswer, setSelectedAnswer] = useState("");

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    let arr = [];
    if (student && student.name) {
      let tempSubjects;
      if (student.class === "10th") {
        tempSubjects = Sallybus10.subjects;
        tempSubjects = shuffle(tempSubjects);

        tempSubjects.map((i) => {
          let tempQuestions = Sallybus10.questions;
          tempQuestions = tempQuestions.filter((j) => j.type === i);
          tempSubjects = shuffle(tempQuestions);
          tempQuestions = tempQuestions.filter((j, k) => k < 11);

          let object = {
            type: i,
            questions: tempQuestions,
          };

          arr.push(object);

          return i;
        });
      } else {
        tempSubjects = Sallybus9.subjects;
        tempSubjects = shuffle(tempSubjects);

        tempSubjects.map((i) => {
          let tempQuestions = Sallybus9.questions;
          tempQuestions = tempQuestions.filter((j) => j.type === i);
          tempSubjects = shuffle(tempQuestions);
          tempQuestions = tempQuestions.filter((j, k) => k < 11);

          let object = {
            type: i,
            questions: tempQuestions,
          };

          arr.push(object);

          return i;
        });
      }
    }

    setQuestions(arr);
  }, [student]);

  useEffect(() => {
    let intervalId;
    var min = 0;

    if (student && student.datetime) {
      var duration = moment.duration(moment().diff(student.datetime));
      min = duration.asMinutes();
      min *= -1;

      if (min < 0) min = 0;
      min = Math.round(min);
    } else {
      min = 0;
    }

    setMins(min);

    setInterval(() => {
      min = 0;

      if (student && student.datetime) {
        var duration = moment.duration(moment().diff(student.datetime));
        min = duration.asMinutes();
        min *= -1;

        if (min < 0) min = 0;
        min = Math.round(min);
      } else {
        min = 0;
      }

      setMins(min);
    }, 60 * 1000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [student]);

  let navigate = useNavigate();

  const saveAnswer = (i) => {
    if (!selectedAnswer) return null;

    let arr = questions;

    if (!arr[currentIndex]) return null;

    let tempQuestions = arr[currentIndex].questions;

    tempQuestions[currentQIndex].answer = selectedAnswer;
    setQuestions(arr);
    setSelectedAnswer("");




    if(i === 0) {
      alert('Test Finished')
    } else {
      if (currentQIndex === tempQuestions.length - 1) {
        setCurrentQIndex(0);
        setCurrentIndex(currentIndex + 1);
      } else setCurrentQIndex(currentQIndex + 1);
    }
  };

  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center mcqs-wrapper">
      <form className="mcqs-form col-lg-6 col-md-9 col-12 d-flex flex-column">
        {student && student.name && (
          <>
            <div
              className="col-12 p-0 d-flex flex-row align-items-center justify-content-between"
              style={{ width: "100%" }}
            >
              <h1>Welcome {student.name}</h1>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "24px 24px 12px 24px",
                }}
              >
                <CircularProgressbar
                  value={Math.round((mins * 100) / 60)}
                  text={`${mins} mins`}
                  counterClockwise={true}
                  styles={buildStyles({
                    rotation: 0,
                    textSize: "18px",
                    pathTransitionDuration: 0.2,
                    pathColor: `rgba(255, 255, 255)`,
                    textColor: "white",
                    trailColor: "#4b1ff8",
                    backgroundColor: "white",
                  })}
                />
              </div>
            </div>
            <div className="line"></div>
            <div
              style={{ width: "100%" }}
              className="d-flex flex-row justify-content-end"
            >
              <h6
                style={{
                  marginRight: "28px",
                }}
              >
                {questions && questions[currentIndex]
                  ? questions[currentIndex].type
                  : ""}
              </h6>
            </div>
            <div
              className="d-flex flex-column"
              style={{
                width: "90%",
                marginLeft: "24px",
                marginRight: "24px",
                marginTop: "12px",
                marginBottom: "0px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  wordBreak: "break-all",
                }}
              >
                {questions &&
                  questions[currentIndex] &&
                  questions[currentIndex].questions &&
                  questions[currentIndex].questions[currentQIndex] &&
                  questions[currentIndex].questions[currentQIndex].question}
              </p>
              {questions &&
                questions[currentIndex] &&
                questions[currentIndex].questions &&
                questions[currentIndex].questions[currentQIndex] &&
                questions[currentIndex].questions[currentQIndex].options.map(
                  (i, k) => {
                    return (
                      <div
                        onClick={(e) => {
                          setSelectedAnswer(i);
                        }}
                        key={k}
                        className="option d-flex flex-row align-items-center"
                        style={{
                          width: "90%",
                          border:
                            selectedAnswer === i
                              ? "1px solid #2bb8c2"
                              : "1px solid white",
                          padding: "2px 12px",
                          marginBottom: "18px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          color: selectedAnswer === i ? "#2bb8c2" : "white",
                        }}
                      >
                        <div
                          className="span"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "20px",
                            height: "20px",
                            borderRadius: "1000px",
                            border:
                              selectedAnswer === i
                                ? "1px solid #2bb8c2"
                                : "1px solid white",
                            background:
                              selectedAnswer === i ? "#2bb8c2" : "transparent",
                            color: "white",
                          }}
                        >
                          <span
                            className="span fa fa-check"
                            style={{
                              fontSize: "12px",
                              opacity: selectedAnswer === i ? "1" : "0",
                            }}
                          ></span>
                        </div>
                        <p
                          style={{
                            marginLeft: "12px",
                            fontSize: "14px",
                            wordBreak: "break-all",
                            marginTop: "14px",
                          }}
                        >
                          {i}
                        </p>
                      </div>
                    );
                  }
                )}
            </div>
            {questions &&
            questions[currentIndex] &&
            currentIndex === questions.length - 1 &&
            questions[currentIndex].questions &&
            questions[currentIndex].questions[currentQIndex] &&
            currentQIndex === questions[currentIndex].questions.length - 1 ? (
              <button
              onClick={(e) => {
                saveAnswer(0);
              }}
                type="button"
                style={{
                  marginLeft: "auto",
                  marginRight: "24px",
                  marginTop: "24px",
                  marginBottom: "24px",
                  opacity: selectedAnswer ? "1" : "0.5",
                }}
              >
                Finish
              </button>
            ) : (
              <button
                onClick={(e) => {
                  saveAnswer(1);
                }}
                disabled={selectedAnswer === ""}
                type="button"
                style={{
                  marginLeft: "auto",
                  marginRight: "24px",
                  marginTop: "24px",
                  marginBottom: "24px",
                  opacity: selectedAnswer ? "1" : "0.5",
                }}
              >
                Next
              </button>
            )}
          </>
        )}

        {!student && (
          <div
            style={{
              margin: "36px auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ margin: "0px" }}>Please register yourself</h1>
            <button
              type="button"
              onClick={(e) => {
                navigate("/student/details");
              }}
              style={{
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              Register here
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    student: state.Student.student,
  };
};

export default connect(mapStateToProps, {})(StudentDetailsEntry);
