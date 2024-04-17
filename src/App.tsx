import "./App.css";
import MUIButtons from "./components/02-MUIButtons";
import MUITypography from "./components/01-MUITypography";
import MUITextfield from "./components/03-MUITextField";
import MUISelectFiled from "./components/04-MUISelectField";
import MUIRadioBtn from "./components/05.MUIRadioBtn";
import MUICheckBox from "./components/06.MUICheckbox";
import MUISwitchBtn from "./components/07.MUISwitchBtn";
import MUIRating from "./components/08.MUIRating";
import MUIAutoComplete from "./components/09.MUIAutoComplete";
import MUIBox from "./components/10.MUIBox";
import MUIStack from "./components/11.MUIStack";
import MUIGrid from "./components/12.MIUGrid";
import MUIPaper from "./components/12.MUIPaper";
import MUICard from "./components/13.MUICard";
import MUIAccordion from "./components/14.MUIAccordion";
import MUIAccordion2 from "./components/15.MUIAccordion2";
import MUIImagesList from "./components/16.MUIImageList";
import MUINavbar from "./components/17.MUINavbarAndMenu";
import MUILink from "./components/18.MUILink";
import MUIBreadCrumbs from "./components/19.MUIBreadCrumbs";
import MUIDrawer from "./components/20.MUIDrawer";
import MUISpeedDial from "./components/21.MUISpeedDial";
import MUIButtonNavigation from "./components/22.MUIButtonNavigation";
import MUIAvtar from "./components/23.MUIAvtar";
import MUIBadge from "./components/24.MUIBadge";
import MUIList from "./components/25.MUIList";
import MUIChip from "./components/26.MUIChip";
import MUITooltip from "./components/27.MUITooltip";
import MUITable from "./components/28.MUITable";
import MUIAlert from "./components/29.MUIAlert";
import MUISnackbar from "./components/30.MUISnackbar";
import MUIDialog from "./components/31.MUIDialog";
import MUIProgress from "./components/32.MUIProgressBar";
import MUISkeleton from "./components/33.MUISkeleton";
import MUILoadingBtn from "./components/34.MUILoadingBtn";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MUIDateAndTime from "./components/35.MUIDateAndTime";
import MUITabs from "./components/36.MUITabs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <MUITypography /> */}
      {/* <MUIButtons /> */}
      {/* <MUITextfield /> */}
      {/* <MUISelectFiled /> */}
      {/* <MUIRadioBtn /> */}
      {/* <MUICheckBox /> */}
      {/* <MUISwitchBtn /> */}
      {/* <MUIRating /> */}
      {/* <MUIAutoComplete /> */}
      {/* <MUIBox /> */}
      {/* <MUIStack /> */}
      {/* <MUIGrid /> */}
      {/* <MUIPaper /> */}
      {/* <MUICard /> */}
      {/* <MUIAccordion /> */}
      {/* <MUIAccordion2 /> */}
      {/* <MUIImagesList /> */}
      {/* <MUINavbar /> */}
      {/* <MUILink /> */}
      {/* <MUIBreadCrumbs /> */}
      {/* <MUIDrawer /> */}
      {/* <MUISpeedDial /> */}
      {/* <MUIButtonNavigation /> */}
      {/* <MUIAvtar /> */}
      {/* <MUIBadge /> */}
      {/* <MUIList /> */}
      {/* <MUIChip /> */}
      {/* <MUITooltip /> */}
      {/* <MUITable /> */}
      {/* <MUIAlert /> */}
      {/* <MUISnackbar /> */}
      {/* <MUIDialog /> */}
      {/* <MUIProgress /> */}
      {/* <MUISkeleton /> */}
      {/* <MUILoadingBtn /> */}
      {/* <MUIDateAndTime /> */}
      <MUITabs />
    </LocalizationProvider>
  );
}

export default App;
