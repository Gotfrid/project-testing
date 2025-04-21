FROM cypress/included:latest

ENV CYPRESS_BASE_URL="http://backend:8000"

COPY . .

CMD [ "npm", "test" ]