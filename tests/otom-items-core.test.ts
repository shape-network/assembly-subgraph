import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CreationEnabledSet } from "../generated/schema"
import { CreationEnabledSet as CreationEnabledSetEvent } from "../generated/OtomItemsCore/OtomItemsCore"
import { handleCreationEnabledSet } from "../src/otom-items-core"
import { createCreationEnabledSetEvent } from "./otom-items-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let isEnabled = "boolean Not implemented"
    let newCreationEnabledSetEvent = createCreationEnabledSetEvent(isEnabled)
    handleCreationEnabledSet(newCreationEnabledSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("CreationEnabledSet created and stored", () => {
    assert.entityCount("CreationEnabledSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreationEnabledSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isEnabled",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
