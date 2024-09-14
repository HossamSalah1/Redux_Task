import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/slices/language";
import { changName } from "../../store/slices/userName";

export default function Home() {
  const lang = useSelector((state) => state.language.language);
  const name =useSelector((state)=>state.userName.userName)
  // console.log(state.language.language);

  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage((lang =='en')?'ar':'en'));
  };

  const toggleName = () => {
    dispatch(changName((name =='Hossam')?'mohammed':'Hossam'));
  };
  
  return (
    <>
      Home language is {lang}

      
      <button
        className="btn btn-success"
        onClick={() => {
          toggleLanguage();
        }}
      >
        change language
      </button>

      <button
        className="btn btn-success  m-5"
        onClick={() => {
          toggleName();
        }}
      >
        change Name
      </button>

      user name is : {name}
    </>
  );
}
