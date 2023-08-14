import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { gridTemplateLargeScreens, gridTemplateSmallScreens } from "@/templates";
import { useGetStatisticsQuery } from "@/state/api";


const Dashboard = () => {
  const { data: statisticsData } = useGetStatisticsQuery()

  if (statisticsData !== undefined) {
    const listOfSectors: Array<string> = []
    for (let i = 0; i < statisticsData.length; i++) {
      const current = statisticsData[i]
      if (!(listOfSectors.includes(current.sector))) {
        current.sector && listOfSectors.push(current.sector)
      }
    }
    console.log(listOfSectors)
  }

  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
