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
 * @interface ModelSecret
 */
export interface ModelSecret {
    /**
     * 
     * @type {string}
     * @memberof ModelSecret
     */
    full_filename: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelSecret
     */
    masked: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelSecret
     */
    matched_content: string;
    /**
     * 
     * @type {number}
     * @memberof ModelSecret
     */
    relative_ending_index: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSecret
     */
    relative_starting_index: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSecret
     */
    starting_index: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSecret
     */
    updated_at: number;
}

/**
 * Check if a given object implements the ModelSecret interface.
 */
export function instanceOfModelSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "full_filename" in value;
    isInstance = isInstance && "masked" in value;
    isInstance = isInstance && "matched_content" in value;
    isInstance = isInstance && "relative_ending_index" in value;
    isInstance = isInstance && "relative_starting_index" in value;
    isInstance = isInstance && "starting_index" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelSecretFromJSON(json: any): ModelSecret {
    return ModelSecretFromJSONTyped(json, false);
}

export function ModelSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'full_filename': json['full_filename'],
        'masked': json['masked'],
        'matched_content': json['matched_content'],
        'relative_ending_index': json['relative_ending_index'],
        'relative_starting_index': json['relative_starting_index'],
        'starting_index': json['starting_index'],
        'updated_at': json['updated_at'],
    };
}

export function ModelSecretToJSON(value?: ModelSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'full_filename': value.full_filename,
        'masked': value.masked,
        'matched_content': value.matched_content,
        'relative_ending_index': value.relative_ending_index,
        'relative_starting_index': value.relative_starting_index,
        'starting_index': value.starting_index,
        'updated_at': value.updated_at,
    };
}

