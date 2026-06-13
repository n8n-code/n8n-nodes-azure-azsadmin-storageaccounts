import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminStorageaccounts implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Storageaccounts',
                name: 'N8nDevAzureAzsadminStorageaccounts',
                icon: { light: 'file:./azure-azsadmin-storageaccounts.png', dark: 'file:./azure-azsadmin-storageaccounts.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Admin Storage Management Client.',
                defaults: { name: 'Azure Azsadmin Storageaccounts' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminStorageaccountsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
