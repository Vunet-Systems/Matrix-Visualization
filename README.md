# Matrix Visualization

## How to use Matrix-Visualization on your PC?
1. git clone https://github.com/Vunet-Systems/Matrix-Visualization.git
2. cd matrix-visualization/
3. yarn install
4. yarn dev

## Using Matrix-Visualization in Grafana
- Create a new dashboard in the grafana server and add a new panel.
- Choose the **Matrix-Visualization** plugin from the list of all panel plugins.
- Choose an SQL data source and add a query:  
    1. SELECT
    2. city_stores AS "City\Stores", big_bazar AS "Big Bazar", reliance AS "Reliance", more AS "More"
    3. FROM matrix

## Screenshots
### Visualization:
![Matrix-visualization](/src/img/matrix-visualization-panel.png)

### Data from Backend:
![Matrix-visualization](/src/img/matrix-visualization-panel-data.png)

## Commands for creating a SQL Table similar to the ours:
- CREATE TABLE matrix(city-stores text, big-bazar int, reliance int, more int);
- SELECT * FROM matrix;
- INSERT INTO matrix(city_stores, big_bazar, reliance, more) VALUES('Bangalore', 10, 5, 12);
- INSERT INTO matrix(city_stores, big_bazar, reliance, more) VALUES('Chennai', 8, 7, 6);
- INSERT INTO matrix(city_stores, big_bazar, reliance, more) VALUES('Hyderabad', 4, 11, 9);
- INSERT INTO matrix(city_stores, big_bazar, reliance, more) VALUES('Mumbai', 3, 18, 14);
- SELECT * FROM matrix;
