import createAnalytics, { AnalyticsEvent, ErrorDetail } from './analytics';
import { createGraphqlFetch, GraphqlFetch } from './graphqlFetch';
import { createGateway, Gateway } from './gateway';

export interface Connection {
  graphqlFetch: GraphqlFetch;
  gateway: Gateway;
  analytics: {
    track: (e: AnalyticsEvent) => Promise<Response>;
    report: (detail: ErrorDetail) => void;
  };
}

const connection = (options: {
  env: 'stage' | 'prod' | 'local';
  element: HTMLElement;
  componentVersion: string;
  clientId?: string;
}): Connection => {
  const { componentVersion, element, env, clientId } = options;

  return {
    gateway: createGateway({
      baseUrl: () => {
        switch (env) {
          case 'stage':
            return 'https://api.stage.manifold.co/v1';
          case 'local':
            return 'https://api.arigato.tools/v1';
          default:
            return 'https://api.manifold.co/v1';
        }
      },
    }),
    graphqlFetch: createGraphqlFetch({
      element,
      version: componentVersion,
      clientId,
      endpoint: () => {
        switch (env) {
          case 'stage':
            return 'https://api.stage.manifold.co/graphql';
          case 'local':
            return 'https://api.arigato.tools/graphql';
          default:
            return 'https://api.manifold.co/graphql';
        }
      },
    }),
    analytics: createAnalytics({ env, element, componentVersion }),
  };
};

export default connection;
