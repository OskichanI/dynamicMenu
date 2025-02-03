class Api {
  metaverse = (props) =>
    new Promise((res, rej) => {
      let { url, method, body, token, simple, params } = props;
      let config = {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${env.METAVERSE_API_KEY}`,
          "User-Authorization": `Bearer ${token}`,
        },
      };
      if (body) config.body = body;
      if (params) url = url + "?" + params;
      fetch(url, config)
        .then((response) => (simple ? res(response) : response.json()))
        .then((json) => res(json))
        .catch((err) => rej(err));
    });
}

export default new Api();
