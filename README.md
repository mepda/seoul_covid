# Open API for Covid in Seoul / Korea

This project was made to track Covid's spread / pace in Seoul and South Korea.

## Using the API

If you want to consume the API without cloning this repo, feel free! This project was meant to help with creating awareness of the current levels of Covid by creating an easy to consume API with a JSON response.

Make a get request to https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api

You can pass in url params also with start_date and end_date set to the ISO 8601 standard (YYYY-MM-DD).

The API will by default return the last 7 days if no url params are passed in.


## Notes

This is a project I built to alert myself about daily Corona virus cases in Korea without the need to go to a bunch of websites. The data is from a government website here in Korea that updates around 10am each day. The update times are somewhat sporadic, sometimes happenening at 9 am, while other times occuring after 11 am. I noticed also that the data on Saturdays would sometime have some placeholder data (like 36 total cases with 13 in Seoul)


## Contributing

If you have some ideas of how to display data, feel free to contact me or toss up an issue on this repo.