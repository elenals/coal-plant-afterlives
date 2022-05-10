# green-energy-transition

## Data Preparation

### Preliminary Monthly Electric Generator Inventory Data (from Form EIA-860M)

To show information related to **retired, currently operating, and planned retirements of power plants across the U.S.**, I am using data provided by the U.S. Energy Information Administration (EIA), which they prepare from the Form EIA-860.

The [Form EIA-860](https://www.eia.gov/electricity/data/eia860) collects generator-level information about existing and planned generators with 1 megawatt (MW) or greater of combined nameplate capacity. The EIA also supplements the annual survey form with a monthly survey, [Form EIA-860M](https://www.eia.gov/electricity/data/eia860m/). Monthly data is the most updated, but has not been fully verified by the EIA.

The most recent annual dataset is from 2020, so I am using a monthly dataset from the month of February 2022 for the current inventory of power plants.

First, I concated concatenate the sheets `Operating`, `Planned`, and `Retired` and deleted unnecessary columns. Then, I used [OpenRefine](https://openrefine.org/download.html) to group technology into types:

- Wood/Wood Waste Biomass, Other Waste Biomass &rarr; `Biomass`
- Solar Thermal with Energy Storage, Solar Thermal without Energy Storage, and Solar Photovoltaic &rarr; `Solar`
- Onshore Wind Turbine, Offshore Wind Turbine &rarr; `Wind Turbine`
- Hydroelectric Pumped Storage, Conventional Hydroelectric &rarr; `Hydroelectric`
- Petroleum Coke, Petroleum Liquids &rarr; `Petroleum Coke & Liquids`
- Natural Gas with Compressed Air Storage, Natural Gas Fired Combustion Turbine, Natural Gas Fired Combined Cycle, Natural Gas Steam Turbine, Natural Gas Internal Combustion Engine, Other Natural Gas &rarr; `Natural Gas`
- Coal Integrated Gasification Combined Cycle, Conventional Steam Coal &rarr; `Coal`
- Landfills, Municipal Solid Waste &rarr; `Landfills & Municipal Solid Waste`
- Flywheels, Other Gases, All Other &rarr; `Other`

and to give full names for state abbreviations:

- AZ &rarr; `Arizona`
