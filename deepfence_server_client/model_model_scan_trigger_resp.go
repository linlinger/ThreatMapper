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

// checks if the ModelScanTriggerResp type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelScanTriggerResp{}

// ModelScanTriggerResp struct for ModelScanTriggerResp
type ModelScanTriggerResp struct {
	ScanId string `json:"scan_id"`
}

// NewModelScanTriggerResp instantiates a new ModelScanTriggerResp object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelScanTriggerResp(scanId string) *ModelScanTriggerResp {
	this := ModelScanTriggerResp{}
	this.ScanId = scanId
	return &this
}

// NewModelScanTriggerRespWithDefaults instantiates a new ModelScanTriggerResp object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelScanTriggerRespWithDefaults() *ModelScanTriggerResp {
	this := ModelScanTriggerResp{}
	return &this
}

// GetScanId returns the ScanId field value
func (o *ModelScanTriggerResp) GetScanId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ScanId
}

// GetScanIdOk returns a tuple with the ScanId field value
// and a boolean to check if the value has been set.
func (o *ModelScanTriggerResp) GetScanIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ScanId, true
}

// SetScanId sets field value
func (o *ModelScanTriggerResp) SetScanId(v string) {
	o.ScanId = v
}

func (o ModelScanTriggerResp) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelScanTriggerResp) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["scan_id"] = o.ScanId
	return toSerialize, nil
}

type NullableModelScanTriggerResp struct {
	value *ModelScanTriggerResp
	isSet bool
}

func (v NullableModelScanTriggerResp) Get() *ModelScanTriggerResp {
	return v.value
}

func (v *NullableModelScanTriggerResp) Set(val *ModelScanTriggerResp) {
	v.value = val
	v.isSet = true
}

func (v NullableModelScanTriggerResp) IsSet() bool {
	return v.isSet
}

func (v *NullableModelScanTriggerResp) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelScanTriggerResp(val *ModelScanTriggerResp) *NullableModelScanTriggerResp {
	return &NullableModelScanTriggerResp{value: val, isSet: true}
}

func (v NullableModelScanTriggerResp) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelScanTriggerResp) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

