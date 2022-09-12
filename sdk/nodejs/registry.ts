// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class Registry extends pulumi.CustomResource {
    /**
     * Get an existing Registry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryState, opts?: pulumi.CustomResourceOptions): Registry {
        return new Registry(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'codefresh:index/registry:Registry';

    /**
     * Returns true if the given object is an instance of Registry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Registry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Registry.__pulumiType;
    }

    /**
     * _(Optional, Default = false)_ default registry
     */
    public readonly default!: pulumi.Output<boolean | undefined>;
    /**
     * _(Optional)_ fallback registry
     */
    public readonly fallbackRegistry!: pulumi.Output<string | undefined>;
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * _(Required)_ some unique name for registry
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * _(Optional, Default = true)_ primary registry
     */
    public readonly primary!: pulumi.Output<boolean | undefined>;
    /**
     * _(Required)_ A `spec` block as documented below.
     */
    public readonly spec!: pulumi.Output<outputs.RegistrySpec>;

    /**
     * Create a Registry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RegistryArgs | RegistryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RegistryState | undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["fallbackRegistry"] = state ? state.fallbackRegistry : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primary"] = state ? state.primary : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
        } else {
            const args = argsOrState as RegistryArgs | undefined;
            if ((!args || args.spec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spec'");
            }
            resourceInputs["default"] = args ? args.default : undefined;
            resourceInputs["fallbackRegistry"] = args ? args.fallbackRegistry : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["primary"] = args ? args.primary : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["kind"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Registry.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Registry resources.
 */
export interface RegistryState {
    /**
     * _(Optional, Default = false)_ default registry
     */
    default?: pulumi.Input<boolean>;
    /**
     * _(Optional)_ fallback registry
     */
    fallbackRegistry?: pulumi.Input<string>;
    kind?: pulumi.Input<string>;
    /**
     * _(Required)_ some unique name for registry
     */
    name?: pulumi.Input<string>;
    /**
     * _(Optional, Default = true)_ primary registry
     */
    primary?: pulumi.Input<boolean>;
    /**
     * _(Required)_ A `spec` block as documented below.
     */
    spec?: pulumi.Input<inputs.RegistrySpec>;
}

/**
 * The set of arguments for constructing a Registry resource.
 */
export interface RegistryArgs {
    /**
     * _(Optional, Default = false)_ default registry
     */
    default?: pulumi.Input<boolean>;
    /**
     * _(Optional)_ fallback registry
     */
    fallbackRegistry?: pulumi.Input<string>;
    /**
     * _(Required)_ some unique name for registry
     */
    name?: pulumi.Input<string>;
    /**
     * _(Optional, Default = true)_ primary registry
     */
    primary?: pulumi.Input<boolean>;
    /**
     * _(Required)_ A `spec` block as documented below.
     */
    spec: pulumi.Input<inputs.RegistrySpec>;
}