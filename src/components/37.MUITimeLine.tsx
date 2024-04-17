import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Stack } from "@mui/material";
// v43 m:2
export default function MUITimeLine() {
  return (
    <Stack spacing={2}>
      <Box my={2}>
        <Timeline>
          <TimelineItem>
            {/* extra text on another side */}
            <TimelineOppositeContent>At 9 am</TimelineOppositeContent>

            <TimelineSeparator>
              {/* icon */}
              <TimelineDot
                color="secondary"
                variant="outlined" //"outlined" | "filled"
              />
              {/* line between points */}
              <TimelineConnector />
            </TimelineSeparator>
            {/* Text */}
            <TimelineContent>City A</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            {/* extra text on another side */}
            <TimelineOppositeContent color={"text.secondary"}>
              At 9 am
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City B</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              {/* <TimelineConnector /> */}
            </TimelineSeparator>

            <TimelineContent>City C</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
      {/* position  of timeline */}
      <Box my={2}>
        <Timeline
          position="left" //"left" | "right" | "alternate" | "alternate-reverse"
        >
          <TimelineItem>
            <TimelineSeparator>
              {/* icon */}
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            {/* Text */}
            <TimelineContent>City A</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City B</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City C</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <Box my={2}>
        <Timeline
          position="right" //"left" | "right" | "alternate" | "alternate-reverse"
        >
          <TimelineItem>
            <TimelineSeparator>
              {/* icon */}
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            {/* Text */}
            <TimelineContent>City A</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City B</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City C</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <Box my={2}>
        <Timeline
          position="alternate" //"left" | "right" | "alternate" | "alternate-reverse"
        >
          <TimelineItem>
            <TimelineSeparator>
              {/* icon */}
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            {/* Text */}
            <TimelineContent>City A</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City B</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>City C</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Stack>
  );
}
