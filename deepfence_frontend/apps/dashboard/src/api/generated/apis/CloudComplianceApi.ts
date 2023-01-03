/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  IngestersCloudComplianceDoc,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    IngestersCloudComplianceDocFromJSON,
    IngestersCloudComplianceDocToJSON,
} from '../models';

export interface IngestCloudCompliancesRequest {
    ingestersCloudComplianceDoc?: Array<IngestersCloudComplianceDoc> | null;
}

/**
 * CloudComplianceApi - interface
 * 
 * @export
 * @interface CloudComplianceApiInterface
 */
export interface CloudComplianceApiInterface {
    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * @summary Ingest Cloud Compliances
     * @param {Array<IngestersCloudComplianceDoc>} [ingestersCloudComplianceDoc] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudComplianceApiInterface
     */
    ingestCloudCompliancesRaw(requestParameters: IngestCloudCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances
     */
    ingestCloudCompliances(requestParameters: IngestCloudCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class CloudComplianceApi extends runtime.BaseAPI implements CloudComplianceApiInterface {

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances
     */
    async ingestCloudCompliancesRaw(requestParameters: IngestCloudCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/ingest/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ingestersCloudComplianceDoc?.map(IngestersCloudComplianceDocToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances
     */
    async ingestCloudCompliances(requestParameters: IngestCloudCompliancesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestCloudCompliancesRaw(requestParameters, initOverrides);
    }

}
