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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelResponseAccessToken
 */
export interface ModelResponseAccessToken {
    /**
     * 
     * @type {string}
     * @memberof ModelResponseAccessToken
     */
    access_token?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelResponseAccessToken
     */
    refresh_token?: string;
}

/**
 * Check if a given object implements the ModelResponseAccessToken interface.
 */
export function instanceOfModelResponseAccessToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelResponseAccessTokenFromJSON(json: any): ModelResponseAccessToken {
    return ModelResponseAccessTokenFromJSONTyped(json, false);
}

export function ModelResponseAccessTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelResponseAccessToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_token': !exists(json, 'access_token') ? undefined : json['access_token'],
        'refresh_token': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
    };
}

export function ModelResponseAccessTokenToJSON(value?: ModelResponseAccessToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.access_token,
        'refresh_token': value.refresh_token,
    };
}

