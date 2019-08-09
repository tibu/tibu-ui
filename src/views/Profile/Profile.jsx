import React, { useState } from "react";
import TbHeader from "../../Components/TbHeader";
import TbHeaderMobile from "../../Components/TbHeaderMobile";
import SideBarCard from "../../Components/SideBarCard";
import TbTabs from "../../Components/TbTabs";
import Description from "../../Components/Description";
import GeneralInfo from "../../Components/GeneralInfo";
import TbTags from "../../Components/TbTags";
import TbTimeline from "../../Components/TbTimeline";

import "../../App.scss";
import {
  Tabs,
  Typography,
  Alert,
  Divider,
  Tag,
  List,
  Button,
  Row,
  Col,
  Progress,
  Tooltip,
  Card,
  Icon
} from "antd";

const { Title, Text } = Typography;

const Profile = () => {
  return (
    <div className="App">
      <Description
        cardHeader={"General information"}
        cardHeaderTags={false}
        extraLink={false}
      >
        <GeneralInfo />
      </Description>
      <Divider />
      <Description cardHeader={"Bio"} cardHeaderTags={false} extraLink={false}>
        <Text editable>
          The world of healthcare is on the move. This requires a creative
          approach from all parties involved. In many cases, care can be
          organized differently, and clients, care providers and financiers can
          benefit from this. That is why Stichting De Linde focuses on
          innovation. We do this mainly in collaboration with our sister
          organizations De Tamarinde and De Portuur . Below we present three
          initiatives that we have launched in the recent period. These are
          three new platforms that stem from our principle of scaling up and
          down scaling. De Linde always provides a professional framework and a
          sounding board for these platforms, so that the quality of the service
          is guaranteed.
        </Text>
      </Description>
      <Divider />
      <Description
        cardHeader={"Characterestics"}
        cardHeaderTags={false}
        extraLink={false}
      >
        <TbTags />
      </Description>
      <Divider />
      <Description
        cardHeader={"Experience"}
        cardHeaderTags={false}
        extraLink={false}
      >
        <TbTimeline />
      </Description>
      <Divider />
      <Description
        cardHeader={"Education"}
        cardHeaderTags={false}
        extraLink={false}
      >
        <TbTimeline />
      </Description>
    </div>
  );
};

export default Profile;
