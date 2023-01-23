/*
Deepfence ThreatMapper

Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.

API version: 2.0.0
Contact: community@deepfence.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package deepfence_server_client

import (
	"encoding/json"
)

// checks if the ReportersProviderThreatGraph type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReportersProviderThreatGraph{}

// ReportersProviderThreatGraph struct for ReportersProviderThreatGraph
type ReportersProviderThreatGraph struct {
	ComplianceCount int32 `json:"compliance_count"`
	Resources []ReportersThreatNodeInfo `json:"resources"`
	SecretsCount int32 `json:"secrets_count"`
	VulnerabilityCount int32 `json:"vulnerability_count"`
}

// NewReportersProviderThreatGraph instantiates a new ReportersProviderThreatGraph object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReportersProviderThreatGraph(complianceCount int32, resources []ReportersThreatNodeInfo, secretsCount int32, vulnerabilityCount int32) *ReportersProviderThreatGraph {
	this := ReportersProviderThreatGraph{}
	this.ComplianceCount = complianceCount
	this.Resources = resources
	this.SecretsCount = secretsCount
	this.VulnerabilityCount = vulnerabilityCount
	return &this
}

// NewReportersProviderThreatGraphWithDefaults instantiates a new ReportersProviderThreatGraph object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReportersProviderThreatGraphWithDefaults() *ReportersProviderThreatGraph {
	this := ReportersProviderThreatGraph{}
	return &this
}

// GetComplianceCount returns the ComplianceCount field value
func (o *ReportersProviderThreatGraph) GetComplianceCount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ComplianceCount
}

// GetComplianceCountOk returns a tuple with the ComplianceCount field value
// and a boolean to check if the value has been set.
func (o *ReportersProviderThreatGraph) GetComplianceCountOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ComplianceCount, true
}

// SetComplianceCount sets field value
func (o *ReportersProviderThreatGraph) SetComplianceCount(v int32) {
	o.ComplianceCount = v
}

// GetResources returns the Resources field value
// If the value is explicit nil, the zero value for []ReportersThreatNodeInfo will be returned
func (o *ReportersProviderThreatGraph) GetResources() []ReportersThreatNodeInfo {
	if o == nil {
		var ret []ReportersThreatNodeInfo
		return ret
	}

	return o.Resources
}

// GetResourcesOk returns a tuple with the Resources field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ReportersProviderThreatGraph) GetResourcesOk() ([]ReportersThreatNodeInfo, bool) {
	if o == nil || isNil(o.Resources) {
		return nil, false
	}
	return o.Resources, true
}

// SetResources sets field value
func (o *ReportersProviderThreatGraph) SetResources(v []ReportersThreatNodeInfo) {
	o.Resources = v
}

// GetSecretsCount returns the SecretsCount field value
func (o *ReportersProviderThreatGraph) GetSecretsCount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SecretsCount
}

// GetSecretsCountOk returns a tuple with the SecretsCount field value
// and a boolean to check if the value has been set.
func (o *ReportersProviderThreatGraph) GetSecretsCountOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SecretsCount, true
}

// SetSecretsCount sets field value
func (o *ReportersProviderThreatGraph) SetSecretsCount(v int32) {
	o.SecretsCount = v
}

// GetVulnerabilityCount returns the VulnerabilityCount field value
func (o *ReportersProviderThreatGraph) GetVulnerabilityCount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.VulnerabilityCount
}

// GetVulnerabilityCountOk returns a tuple with the VulnerabilityCount field value
// and a boolean to check if the value has been set.
func (o *ReportersProviderThreatGraph) GetVulnerabilityCountOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.VulnerabilityCount, true
}

// SetVulnerabilityCount sets field value
func (o *ReportersProviderThreatGraph) SetVulnerabilityCount(v int32) {
	o.VulnerabilityCount = v
}

func (o ReportersProviderThreatGraph) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReportersProviderThreatGraph) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["compliance_count"] = o.ComplianceCount
	if o.Resources != nil {
		toSerialize["resources"] = o.Resources
	}
	toSerialize["secrets_count"] = o.SecretsCount
	toSerialize["vulnerability_count"] = o.VulnerabilityCount
	return toSerialize, nil
}

type NullableReportersProviderThreatGraph struct {
	value *ReportersProviderThreatGraph
	isSet bool
}

func (v NullableReportersProviderThreatGraph) Get() *ReportersProviderThreatGraph {
	return v.value
}

func (v *NullableReportersProviderThreatGraph) Set(val *ReportersProviderThreatGraph) {
	v.value = val
	v.isSet = true
}

func (v NullableReportersProviderThreatGraph) IsSet() bool {
	return v.isSet
}

func (v *NullableReportersProviderThreatGraph) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReportersProviderThreatGraph(val *ReportersProviderThreatGraph) *NullableReportersProviderThreatGraph {
	return &NullableReportersProviderThreatGraph{value: val, isSet: true}
}

func (v NullableReportersProviderThreatGraph) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReportersProviderThreatGraph) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

