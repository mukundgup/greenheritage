import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Tourism from "../pages/Touri";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import Safari from '../pages/Cottage/safari';
import MushroomCottage from '../pages/Cottage/mushroomcottage';
import SingleCottage from '../pages/Cottage/singlex';
import DuplexCottage from '../pages/Cottage/duplex';
import TreehouseCottage from '../pages/Cottage/treehouse';
import HomestayCottage from '../pages/Cottage/homestay';
import Row from '../pages/Cottage/row';
import MudSafari from '../pages/Cottage/mudsafari';
import MudMushroom from '../pages/Cottage/mudmushroom';
import Floating from '../pages/Cottage/floating';

import MembershipBenefits from '../pages/Cottage/benefitscompoo';
import OwnACottage from '../components/ownacottage';







function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/tourism" element={<Tourism />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/ownacottage" element={<OwnACottage />} />

          {/* cottage routes */}
          <Route path="/cottages/safari" element={<Safari />} />
          <Route path="/cottages/mushroomCottage" element={<MushroomCottage />} />
          <Route path="/cottages/singlex" element={<SingleCottage />} />
          <Route path="/cottages/duplex" element={<DuplexCottage />} />
          <Route path="/cottages/treehouse" element={<TreehouseCottage />} />
          <Route path="/cottages/homestay" element={<HomestayCottage />} />
          <Route path="/cottages/row" element={<Row />} />
          <Route path="/cottages/mudsafari" element={<MudSafari />} />
          <Route path="/cottages/mudmushroom" element={<MudMushroom />} />
          <Route path="/cottages/floating" element={<Floating />} />
          <Route path="/cottages/membershipBenefits" element={<MembershipBenefits />} />







        </Routes>
      </Router>
    );
  }
  export default AppRoute;



  