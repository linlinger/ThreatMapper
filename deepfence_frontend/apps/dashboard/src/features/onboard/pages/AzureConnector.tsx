import { useNavigate } from 'react-router-dom';
import { Button } from 'ui-components';

import { ConnectorHeader } from '../components/ConnectorHeader';
import { AzureConnectorForm } from '../components/connectors/clouds/azure/AzureConnectorForm';

export const AzureConnector = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  return (
    <div className="w-full">
      <ConnectorHeader
        title="Connect Google Azure Account"
        description="Deploy all modules for Deepfence Compliance Scanner for a single account. For information on AWS Organization and account types, see AWS docs."
      />
      <AzureConnectorForm />
      <Button onClick={goback} outline size="xs" className="mt-16">
        Cancel
      </Button>
    </div>
  );
};
