import { combineReducers } from "redux";
import UserReducer from "./Reducer/UserReducer";
import { selectTempReducer } from "./Reducer/selectTempReducer";
import { PeronalDetailsReducer } from "./Reducer/PeronalDetailsReducer";
import { EducationDetailsReducer } from "./Reducer/EducationDetailsReducer";
import { SkillDetailsReducer } from "./Reducer/SkillDetailsReducer";
import { ProjectDetailsReducer } from "./Reducer/ProjectDetailsReducer";
import AchievementDetailsReducer from "./Reducer/AchievementDetailsReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  TempCode: selectTempReducer,
  personalDetails: PeronalDetailsReducer,
  Education: EducationDetailsReducer,
  Skills: SkillDetailsReducer,
  Projects: ProjectDetailsReducer,
  Achievements: AchievementDetailsReducer,
});

export default rootReducer;
