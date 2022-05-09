# green-energy-transition

## Data Preparation

### Preliminary Monthly Electric Generator Inventory Data (from Form EIA-860M)

To show information related to retired, currently operating, and planned retirements of power plants across the U.S., I am using data provided by the U.S. Energy Information Administration (EIA), which they prepare from the Form EIA-860.

The [Form EIA-860](https://www.eia.gov/electricity/data/eia860) collects generator-level information about existing and planned generators with 1 megawatt (MW) or greater of combined nameplate capacity.

The EIA also supplements the annual survey form with a monthly survey, [Form EIA-860M](https://www.eia.gov/electricity/data/eia860m/). Since the most recent annual data is from 2020, I am using monthly data from the month of February 2022, with the caveat that monthly data has not been fully verified by the EIA and are known to be estimates.

However, the monthly data only includes a comprehensive list of generators that have retired since 2002, so for retirements before 2002, I am pulling from the annual data.
