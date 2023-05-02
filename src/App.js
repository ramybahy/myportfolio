import './App.css';
import Accordion from './modules/accordion';
import ImageModal from './modules/image-modal';
import ProgressBar from './modules/progress-bar';
import ResponsiveNavBarWithIcons from './modules/responsive-nav-bar-with-icons';
import ResponsiveNav from './modules/responsive-nav';
import ResponsiveDropdown from './modules/responsivenav-dropdown';
import ResponsiveSearchBar from './modules/responsive-search-bar';
import SearchMenu from './modules/search-menu';
import SideNav from './modules/side-nav';
import Slider from './modules/slider';
import TabsHeader from './modules/tabs-header';
import TabsTable from './modules/tabs-table';
import Tabs from './modules/tabs';
import Home from './modules/home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/responsive-dropdown" element={<ResponsiveDropdown />} />
        <Route path="/accordion" element={
        <><Accordion title="Section 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique perferendis maxime, amet magnam vitae. Consectetur, iste omnis! Id, accusamus."></Accordion>
      <Accordion title="Section 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique perferendis maxime, amet magnam vitae. Consectetur, iste omnis! Id, accusamus."></Accordion>
      <Accordion title="Section 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique perferendis maxime, amet magnam vitae. Consectetur, iste omnis! Id, accusamus."></Accordion></>}/>
          <Route path="/imagemodal" element={<ImageModal />} />
          <Route path="/progressbar" element={<ProgressBar />} />
          <Route path="/responsivenavBarwithicons" element={<ResponsiveNavBarWithIcons />} />
          <Route path="/responsivenav" element={<ResponsiveNav />} />
          <Route path="/responsivesearchbar" element={<ResponsiveSearchBar />} />
          <Route path="/searchmenu" element={<SearchMenu />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/tabsheader" element={<TabsHeader />} />
          <Route path="/tabstable" element={<TabsTable />} />
          <Route path="/tabs" element={<Tabs />} />

      </Routes>
    </BrowserRouter>   
  );
}

export default App;