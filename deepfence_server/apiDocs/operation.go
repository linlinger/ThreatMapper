package apiDocs

import (
	"net/http"

	ingester "github.com/deepfence/ThreatMapper/deepfence_ingester/ingesters"
	"github.com/deepfence/ThreatMapper/deepfence_server/ingesters"
	"github.com/deepfence/ThreatMapper/deepfence_server/model"
	"github.com/deepfence/ThreatMapper/deepfence_server/reporters"
	"github.com/deepfence/ThreatMapper/deepfence_utils/controls"
	postgresql_db "github.com/deepfence/ThreatMapper/deepfence_utils/postgresql/postgresql-db"
)

func (d *OpenApiDocs) AddUserAuthOperations() {
	d.AddOperation("registerUser", http.MethodPost, "/deepfence/user/register",
		"Register User", "First user registration. Further users needs to be invited.",
		http.StatusOK, []string{tagUser}, nil, nil, new(model.UserRegisterRequest), model.Response{Success: true, Data: model.ResponseAccessToken{}})
	d.AddOperation("authToken", http.MethodPost, "/deepfence/auth/token",
		"Get Access Token for API Token", "Get access token for programmatic API access, by providing API Token",
		http.StatusOK, []string{tagAuthentication}, nil, nil, new(model.ApiAuthRequest), model.Response{Success: true, Data: model.ResponseAccessToken{}})
	d.AddOperation("authTokenRefresh", http.MethodPost, "/deepfence/auth/token/refresh",
		"Refresh access token", "Reissue access token using refresh token",
		http.StatusOK, []string{tagAuthentication}, nil, bearerToken, nil, model.Response{Success: true, Data: model.ResponseAccessToken{}})
	d.AddOperation("login", http.MethodPost, "/deepfence/user/login",
		"Login API", "Login API",
		http.StatusOK, []string{tagAuthentication}, nil, nil, new(model.LoginRequest), model.Response{Success: true, Data: model.ResponseAccessToken{}})
	d.AddOperation("logout", http.MethodPost, "/deepfence/user/logout",
		"Logout API", "Logout API",
		http.StatusNoContent, []string{tagAuthentication}, nil, bearerToken, nil, nil)
}

func (d *OpenApiDocs) AddUserOperations() {
	d.AddOperation("getCurrentUser", http.MethodGet, "/deepfence/user",
		"Get Current User", "Get logged in user information",
		http.StatusOK, []string{tagUser}, nil, bearerToken, nil, model.Response{Success: true, Data: model.User{}})
	d.AddOperation("updateCurrentUser", http.MethodPut, "/deepfence/user",
		"Update Current User", "Update logged in user information",
		http.StatusOK, []string{tagUser}, nil, bearerToken, new(model.User), model.Response{Success: true, Data: model.User{}})
	d.AddOperation("deleteCurrentUser", http.MethodDelete, "/deepfence/user",
		"Delete Current User", "Delete logged in user",
		http.StatusNoContent, []string{tagUser}, nil, bearerToken, nil, nil)
	d.AddOperation("getApiTokens", http.MethodGet, "/deepfence/api-token",
		"Get User's API Tokens", "Get logged in user's API Tokens",
		http.StatusOK, []string{tagUser}, nil, bearerToken, nil, model.Response{Success: true, Data: []postgresql_db.ApiToken{}})
}

func (d *OpenApiDocs) AddGraphOperations() {
	d.AddOperation("getTopologyGraph", http.MethodGet, "/deepfence/graph/topology",
		"Get Topology Graph", "Retrieve the full topology graph associated with the account",
		http.StatusOK, []string{tagTopology}, nil, bearerToken, new(reporters.TopologyFilters), new(reporters.RenderedGraph))

	d.AddOperation("getThreatGraph", http.MethodGet, "/deepfence/graph/threat",
		"Get Threat Graph", "Retrieve the full threat graph associated with the account",
		http.StatusOK, []string{tagThreat}, nil, bearerToken, nil, new(reporters.ThreatGraph))
}

func (d *OpenApiDocs) AddControlsOperations() {
	d.AddOperation("getAgentControls", http.MethodPost, "/deepfence/controls/agent",
		"Fetch Agent Actions", "Fetch actions for a given agent",
		http.StatusOK, []string{tagControls}, nil, bearerToken, new(model.AgentId), new(controls.AgentControls))

	d.AddOperation("getAgentInitControls", http.MethodPost, "/deepfence/controls/agent-init",
		"Fetch Agent Init Actions", "Fetch initial actions for a given agent after it started",
		http.StatusOK, []string{tagControls}, nil, bearerToken, new(model.AgentId), new(controls.AgentControls))
}

func (d *OpenApiDocs) AddIngestersOperations() {
	d.AddOperation("ingestAgentReport", http.MethodPost, "/deepfence/ingest/report",
		"Ingest Topology Data", "Ingest data reported by one Agent",
		http.StatusOK, []string{tagTopology}, nil, bearerToken, new(model.RawReport), nil)

	d.AddOperation("ingestVulnerabilities", http.MethodPost, "/deepfence/ingest/vulnerabilities",
		"Ingest Vulnerabilities", "Ingest vulnerabilities found while scanning the agent host or containers",
		http.StatusOK, []string{tagVulnerability}, nil, bearerToken, new([]ingester.Vulnerability), nil)

	d.AddOperation("ingestSecrets", http.MethodPost, "/deepfence/ingest/secrets",
		"Ingest Secrets", "Ingest secrets found while scanning the agent",
		http.StatusOK, []string{tagSecretScan}, nil, bearerToken, new([]ingester.Secret), nil)

	d.AddOperation("ingestSecretScanStatus", http.MethodPost, "/deepfence/ingest/secret-scan-logs",
		"Ingest Secrets Scan Status", "Ingest secrets scan status from the agent",
		http.StatusOK, []string{tagSecretScan}, nil, bearerToken, new([]ingester.SecretScanStatus), nil)

	d.AddOperation("ingestCompliances", http.MethodPost, "/deepfence/ingest/compliance",
		"Ingest Compliances", "Ingest compliance issues found while scanning the agent",
		http.StatusOK, []string{tagCompliance}, nil, bearerToken, new([]ingester.Compliance), nil)

	d.AddOperation("ingestCloudCompliances", http.MethodPost, "/deepfence/ingest/cloud-compliance",
		"Ingest Cloud Compliances", "Ingest Cloud compliances found while scanning cloud provider",
		http.StatusOK, []string{tagCloudCompliance}, nil, bearerToken, new([]ingester.CloudCompliance), nil)

	d.AddOperation("ingestCloudResources", http.MethodPost, "/deepfence/ingest/cloud-resources",
		"Ingest Cloud resources", "Ingest Clouds Resources found while scanning cloud provider",
		http.StatusOK, []string{tagCloudResources}, nil, bearerToken, new([]ingesters.CloudResource), nil)

}

func (d *OpenApiDocs) AddScansOperations() {
	// Start scan
	d.AddOperation("startVulnerabilityScan", http.MethodPost, "/deepfence/scan/start/vulnerability",
		"Start Vulnerability Scan", "Start Vulnerability Scan on agent or registry",
		http.StatusAccepted, []string{tagVulnerability}, nil, bearerToken, new(model.ScanTriggerReq), new(model.ScanTriggerResp))
	d.AddOperation("startSecretScan", http.MethodPost, "/deepfence/scan/start/secret",
		"Start Secret Scan", "Start Secret Scan on agent or registry",
		http.StatusAccepted, []string{tagSecretScan}, nil, bearerToken, new(model.ScanTriggerReq), new(model.ScanTriggerResp))
	d.AddOperation("startComplianceScan", http.MethodPost, "/deepfence/scan/start/compliance",
		"Start Compliance Scan", "Start Compliance Scan on agent or registry",
		http.StatusAccepted, []string{tagCompliance}, nil, bearerToken, new(model.ScanTriggerReq), new(model.ScanTriggerResp))
	d.AddOperation("startMalwareScan", http.MethodPost, "/deepfence/scan/start/malware",
		"Start Malware Scan", "Start Malware Scan on agent or registry",
		http.StatusAccepted, []string{tagMalwareScan}, nil, bearerToken, new(model.ScanTriggerReq), new(model.ScanTriggerResp))

	// Stop scan
	d.AddOperation("stopVulnerabilityScan", http.MethodGet, "/deepfence/scan/stop/vulnerability",
		"Stop Vulnerability Scan", "Stop Vulnerability Scan on agent or registry",
		http.StatusAccepted, []string{tagVulnerability}, nil, bearerToken, new(model.ScanTriggerReq), nil)
	d.AddOperation("stopSecretScan", http.MethodGet, "/deepfence/scan/stop/secret",
		"Stop Secret Scan", "Stop Secret Scan on agent or registry",
		http.StatusAccepted, []string{tagSecretScan}, nil, bearerToken, new(model.ScanTriggerReq), nil)
	d.AddOperation("stopComplianceScan", http.MethodGet, "/deepfence/scan/stop/compliance",
		"Stop Compliance Scan", "Stop Compliance Scan on agent or registry",
		http.StatusAccepted, []string{tagCompliance}, nil, bearerToken, new(model.ScanTriggerReq), nil)
	d.AddOperation("stopMalwareScan", http.MethodGet, "/deepfence/scan/stop/malware",
		"Stop Malware Scan", "Stop Malware Scan on agent or registry",
		http.StatusAccepted, []string{tagMalwareScan}, nil, bearerToken, new(model.ScanTriggerReq), nil)

	// Status scan
	d.AddOperation("statusVulnerabilityScan", http.MethodGet, "/deepfence/scan/status/vulnerability",
		"Get Vulnerability Scan Status", "Get Vulnerability Scan Status on agent or registry",
		http.StatusAccepted, []string{tagVulnerability}, nil, bearerToken, new(model.ScanStatusReq), new(model.ScanStatusResp))
	d.AddOperation("statusSecretScan", http.MethodGet, "/deepfence/scan/status/secret",
		"Get Secret Scan Status", "Get Secret Scan Status on agent or registry",
		http.StatusAccepted, []string{tagSecretScan}, nil, bearerToken, new(model.ScanStatusReq), new(model.ScanStatusResp))
	d.AddOperation("statusComplianceScan", http.MethodGet, "/deepfence/scan/status/compliance",
		"Get Compliance Scan Status", "Get Compliance Scan Status on agent or registry",
		http.StatusAccepted, []string{tagCompliance}, nil, bearerToken, new(model.ScanStatusReq), new(model.ScanStatusResp))
	d.AddOperation("statusMalwareScan", http.MethodGet, "/deepfence/scan/status/malware",
		"Get Malware Scan Status", "Get Malware Scan status on agent or registry",
		http.StatusAccepted, []string{tagMalwareScan}, nil, bearerToken, new(model.ScanStatusReq), new(model.ScanStatusResp))
}