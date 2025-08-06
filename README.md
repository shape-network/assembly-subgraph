# Assembly Subgraph - OtomItemsCore

A Graph Protocol subgraph for indexing and querying events from the OtomItemsCore smart contract.

## Overview

This subgraph tracks various events related to item management in the Otom universes, including item creation, crafting, destruction, usage, and trait updates. It provides a structured way to query blockchain data for analytics and frontend applications.

## Tracked Events

The subgraph indexes the following events from the OtomItemsCore contract:

- **CreationEnabledSet**: Tracks when item creation is enabled/disabled
- **Initialized**: Contract initialization events
- **ItemCrafted**: When items are crafted by users
- **ItemCreated**: New item creation events
- **ItemDestroyed**: Item destruction events
- **ItemFrozen**: When items are frozen
- **ItemUpdated**: Item update events
- **ItemUsed**: Item usage events
- **ItemsApprovalForAll**: Approval events for item operations
- **OtomItemsSet**: Otom items contract address updates
- **OwnershipTransferred**: Contract ownership transfers
- **RendererSet**: Renderer contract address updates
- **TokensApprovalForAll**: Token approval events
- **TraitsUpdated**: Item trait updates
- **ValidatorSet**: Validator address updates

## Additional Features

- **ItemCraftCounter**: Tracks the number of times each item has been crafted
- **Craft Statistics**: Provides aggregated data for item crafting analytics

## Development

### Prerequisites

- Node.js and Yarn
- Graph CLI
- Docker (for local development)
- Alchemy account

### Installation

```bash
yarn install
```

### Available Scripts

- `yarn codegen`: Generate TypeScript types from the GraphQL schema
- `yarn build`: Build the subgraph
- `yarn deploy`: Deploy to Alchemy Subgraphs
- `yarn create-local`: Create a local subgraph instance
- `yarn remove-local`: Remove local subgraph instance
- `yarn deploy-local`: Deploy to local Graph Node
- `yarn test`: Run tests

### Local Development

1. Start a local Graph Node:

```bash
docker-compose up -d
```

2. Create and deploy the subgraph locally:

```bash
yarn create-local
yarn deploy-local
```

### Deployment

This subgraph is deployed to [Alchemy Subgraphs](https://www.alchemy.com/docs/reference/subgraphs-overview), which provides a robust platform for hosting and querying GraphQL APIs with blockchain data.

To deploy to Alchemy Subgraphs:

```bash
yarn deploy
```

#### Example Alchemy Deployment Command

```bash
yarn graph deploy otomsV2 subgraph.mainnet.yaml \
  --version-label v0.0.1-new-version \
  --node https://subgraphs.alchemy.com/api/subgraphs/deploy \
  --deploy-key {ALCHEMY_KEY} \
  --ipfs https://ipfs.satsuma.xyz
```

For more information about developing and deploying subgraphs, check out the [Alchemy Subgraphs documentation](https://www.alchemy.com/docs/reference/subgraphs-overview).

## Project Structure

```
assembly-subgraph/
├── abis/                    # Contract ABIs
├── generated/               # Generated TypeScript types
├── src/                     # Event handlers and business logic
├── tests/                   # Test files
├── schema.graphql          # GraphQL schema definition
├── subgraph.yaml           # Subgraph manifest
└── package.json            # Dependencies and scripts
```

## Learning Resources

This subgraph serves as an example for learning how to:

- Set up a Graph Protocol subgraph
- Define GraphQL schemas for blockchain events
- Write event handlers in AssemblyScript
- Deploy and query subgraph data
- Handle complex event data structures
- Implement custom aggregations and counters

## Author

- **arod** ([@TheArodEth](https://x.com/TheArodEth))

## License

MIT License
