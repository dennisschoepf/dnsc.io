import { useCovidData } from '../hooks/useCovidData';
import Container from '../components/Container';
import Headline from '../components/Headline';

export default () => {
  const [
    isErrorTotal,
    isLoadingTotal,
    dataTotal,
    lastUpdatedTotal,
  ] = useCovidData();

  const [isErrorCountry, isLoadingCountry, dataCountry] = useCovidData({
    country: 'DE',
  });

  const displayDataCountry = {
    cases: dataCountry.cases,
    'new cases': dataCountry.todayCases,
    deaths: dataCountry.deaths,
    'new deaths': dataCountry.todayDeaths,
  };

  return (
    <Container>
      <Headline className="mb-8">Covid Tracker</Headline>
      <h3 className="text-gray-500 font-bold uppercase mb-2">
        Total Global ({lastUpdatedTotal})
      </h3>
      <div className="flex flex-wrap mb-4">
        {dataTotal &&
          Object.keys(dataTotal).map(
            key =>
              key !== 'updated' && (
                <div className="w-6/12" key={key}>
                  <h4 className="font-bold text-3xl leading-tight">
                    {!isLoadingTotal && dataTotal[key] ? (
                      dataTotal[key].toLocaleString('en-US')
                    ) : (
                      <span className="text-white">0</span>
                    )}
                  </h4>
                  <p className="m-0 pb-4 leading-tight">{key}</p>
                </div>
              )
          )}
      </div>
      <h3 className="text-gray-500 font-bold uppercase mb-2">Total Germany</h3>
      <div className="flex flex-wrap">
        {displayDataCountry &&
          Object.keys(displayDataCountry).map(
            key =>
              key !== 'updated' && (
                <div className="w-6/12" key={key}>
                  <h4 className="font-bold text-3xl leading-tight">
                    {!isLoadingCountry && displayDataCountry[key] ? (
                      <span>
                        {key.startsWith('new') && (
                          <span
                            className="text-red-500"
                            dangerouslySetInnerHTML={{
                              __html: '&blacktriangle;',
                            }}
                          />
                        )}{' '}
                        {displayDataCountry[key].toLocaleString('en-US')}
                      </span>
                    ) : (
                      <span className="text-white">0</span>
                    )}
                  </h4>
                  <p className="m-0 pb-4 leading-tight">{key}</p>
                </div>
              )
          )}
      </div>
    </Container>
  );
};
