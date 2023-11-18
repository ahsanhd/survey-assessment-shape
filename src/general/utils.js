import data from "./data/surveyData.json";
/// First PAGE DATA
export const Title_Screen_Data = data.first;
export const Title_Content = Title_Screen_Data.headings[0];

export const Title_Heading = Title_Content.title;
export const Title_Prefix = Title_Content.prefix;

export const Drop_Down_Content = Title_Screen_Data.content.value;
export const Date_Of_Birth_Data = data.second;
/// DOB DATA
export const DOB_Title = Date_Of_Birth_Data.headings[0].title;
export const DOB_Prefix = Date_Of_Birth_Data.headings[0].prefix;
export const DOB_Suffix = Date_Of_Birth_Data.headings[0].suffix;

/// RATING DATA

export const Rating_Data = data.third;
export const Rating_Top_Title = Rating_Data.headings[0].title;
export const Rating_Top_Prefix = Rating_Data.headings[0].prefix;
export const Rating_Second_Title = Rating_Data.headings[1].title;
export const Rating_Second_Prefix = Rating_Data.headings[1].prefix;

export const Rating_Numbers = Rating_Data.content.value;

/// OTHER SORUCES DATA
export const Other_Sources_Data = data.fourth;

export const Other_Sources_Title = Other_Sources_Data.headings[0].title;
export const Other_Sources_Prefix = Other_Sources_Data.headings[0].prefix;
export const Other_Sources_Suffix = Other_Sources_Data.headings[0].suffix;
export const Other_Sources_CharLimit = Other_Sources_Data.headings[0].CharLimit;

/// BALANCE QUESTION DATA

export const Balance_Data = data.fifth;

export const Balance_Title = Balance_Data.headings[0].title;
export const Balance_Prefix = Balance_Data.headings[0].prefix;

export const Balance_Options = Balance_Data.content.value;

//// ERROR MESSAGES

export const ERROR_MESSAGES = {
  CHAR_LIMIT_REACH: "Character limit exceeded",
};

export const QUESTION_NUMBER = {
  FIRST: "1",
  SECOND: "2",
  THIRD: "3",
  FOURTH: "4",
  FIFTH: "5",
};
