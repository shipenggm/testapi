function() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    base_url: 'https://testapi-4slbtqvzcq-uc.a.run.app',
  }
  if (env == 'dev') {
    config.base_url = 'https://testapi-4slbtqvzcq-uc.a.run.app'
  } else if (env == 'stg') {
    config.base_url = 'https://testapi-4slbtqvzcq-uc.a.run.app'
  }
  return config;
}
