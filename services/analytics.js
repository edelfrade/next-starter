import ReactGA from 'react-ga';


export const initAnalytics = () => {
  const isProd = process.env.NODE_ENV === 'production';
  // Initialize Google Analytics
  ReactGA.initialize('GA-TAG', {
    debug: !isProd,
    titleCase: false,
  });

  if (!isProd) {
    console.log(`Util/Analytics :: initializing Analytics Wrapper! isProd: ${isProd}`);
  }
};

export const logPageView = (pageName = window.location.pathname + window.location.search) => {
  const isProd = process.env.NODE_ENV === 'production';
  // const isProd = true;
  if (!isProd) {
    console.log(`Util/Analytics :: Firing Page View! ${pageName}`);
  } else {
  // Fire Google Analytics Page View Event
    ReactGA.set({ page: pageName, checkProtocolTask: null });
    ReactGA.pageview(pageName);
  }
};

export const trackCustomEvent = (category, action, label) => {
  const isProd = process.env.NODE_ENV === 'production';
  // const isProd = true;
  if (!isProd) {
    console.log(`Util/Analytics :: Firing Custom Event! ${category} - ${action} - ${label}`);
  } else {
    // Fire Google Analytics Custom Event
    ReactGA.event({ category, action, label });
  }
};

export default undefined;
