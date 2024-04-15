import { AxiosResponse } from "axios";

import { $api } from "@/core/api";
import {
  TGetActiveAuthIntegrationsRequest,
  TGetActiveAuthIntegrationsResponse,
  TGetAuthIntegrationsRequest,
  TGetAuthIntegrationsResponse,
  TGetInstallClientBranchesResponse,
  TGetSentryConnectRequest,
  TGetSentryConnectResponse,
  TPostAuthIntegrationsRequest,
  TPostAuthIntegrationsResponse,
  TPutSentryConnectRequest,
  TPutSentryConnectResponse,
} from "@/shared/api/contracts";

class IntegrationService {
  private BASE_URL = "/integrations";
  private BASE_URL_AUTH = `${this.BASE_URL}/auth`;
  private BASE_URL_GITHUB = `${this.BASE_URL}/github`;
  private BASE_URL_SENTRY = `${this.BASE_URL}/sentry/dsn`;

  async getAuthIntegrations(): Promise<TGetAuthIntegrationsResponse> {
    const { data } = await $api.get<
      TGetAuthIntegrationsRequest,
      AxiosResponse<TGetAuthIntegrationsResponse>
    >(this.BASE_URL_AUTH);

    return data;
  }

  async getActiveAuthIntegration(): Promise<TGetActiveAuthIntegrationsResponse> {
    const { data } = await $api.get<
      TGetActiveAuthIntegrationsRequest,
      AxiosResponse<TGetActiveAuthIntegrationsResponse>
    >(`${this.BASE_URL_AUTH}/active`);

    return data;
  }

  async putAuthIntegrations(
    body: TPostAuthIntegrationsRequest,
  ): Promise<TPostAuthIntegrationsResponse> {
    const { data } = await $api.put<TPostAuthIntegrationsResponse>(this.BASE_URL_AUTH, body);

    return data;
  }

  async getInstallClientBranches(): Promise<TGetInstallClientBranchesResponse> {
    const { data } = await $api.get<TGetInstallClientBranchesResponse>(
      `${this.BASE_URL_GITHUB}/launcher/versions`,
    );

    return data;
  }

  async getSentryConnect(params: TGetSentryConnectRequest): Promise<TGetSentryConnectResponse> {
    const { data } = await $api.get<TGetSentryConnectResponse>(this.BASE_URL_SENTRY, { params });

    return data;
  }

  async putSentryConnect(body: TPutSentryConnectRequest): Promise<TPutSentryConnectResponse> {
    const { data } = await $api.put<TPutSentryConnectResponse>(this.BASE_URL_SENTRY, body);

    return data;
  }
}

export const integrationService = new IntegrationService();
