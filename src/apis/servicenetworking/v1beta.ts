// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace servicenetworking_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Service Networking API
   *
   * Provides automatic management of network configurations necessary for certain services.
   *
   * @example
   * const {google} = require('googleapis');
   * const servicenetworking = google.servicenetworking('v1beta');
   *
   * @namespace servicenetworking
   * @type {Function}
   * @version v1beta
   * @variation v1beta
   * @param {object=} options Options for Servicenetworking
   */
  export class Servicenetworking {
    context: APIRequestContext;
    operations: Resource$Operations;
    services: Resource$Services;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.services = new Resource$Services(this.context);
    }
  }

  /**
   * Request to create a subnetwork in a previously peered service network.
   */
  export interface Schema$AddSubnetworkRequest {
    /**
     * Required. A resource that represents the service consumer, such as `projects/123456`. The project number can be different from the value in the consumer network parameter. For example, the network might be part of a Shared VPC network. In those cases, Service Networking validates that this resource belongs to that Shared VPC.
     */
    consumer?: string | null;
    /**
     * Required. The name of the service consumer&#39;s VPC network. The network must have an existing private connection that was provisioned through the connections.create method. The name must be in the following format: `projects/{project}/global/networks/{network}`, where {project} is a project number, such as `12345`. {network} is the name of a VPC network in the project.
     */
    consumerNetwork?: string | null;
    /**
     * An optional description of the subnet.
     */
    description?: string | null;
    /**
     * Required. The prefix length of the subnet&#39;s IP address range.  Use CIDR range notation, such as `30` to provision a subnet with an `x.x.x.x/30` CIDR range. The IP address range is drawn from a pool of available ranges in the service consumer&#39;s allocated range.
     */
    ipPrefixLength?: number | null;
    /**
     * Required. The name of a [region](/compute/docs/regions-zones) for the subnet, such `europe-west1`.
     */
    region?: string | null;
    /**
     * Optional. The starting address of a range. The address must be a valid IPv4 address in the x.x.x.x format. This value combined with the IP prefix range is the CIDR range for the subnet. The range must be within the allocated range that is assigned to the private connection. If the CIDR range isn&#39;t available, the call fails.
     */
    requestedAddress?: string | null;
    /**
     * Required. A name for the new subnet. For information about the naming requirements, see [subnetwork](/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation.
     */
    subnetwork?: string | null;
    /**
     * A list of members that are granted the `compute.networkUser` role on the subnet.
     */
    subnetworkUsers?: string[] | null;
  }
  /**
   * Api is a light-weight descriptor for an API Interface.  Interfaces are also described as &quot;protocol buffer services&quot; in some contexts, such as by the &quot;service&quot; keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as &quot;APIs&quot; in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
   */
  export interface Schema$Api {
    /**
     * The methods of this interface, in unspecified order.
     */
    methods?: Schema$Method[];
    /**
     * Included interfaces. See Mixin.
     */
    mixins?: Schema$Mixin[];
    /**
     * The fully qualified name of this interface, including package name followed by the interface&#39;s simple name.
     */
    name?: string | null;
    /**
     * Any metadata attached to the interface.
     */
    options?: Schema$Option[];
    /**
     * Source context for the protocol buffer service represented by this message.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax of the service.
     */
    syntax?: string | null;
    /**
     * A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here.  The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan.  The major version is also reflected in the package name of the interface, which must end in `v&lt;major-version&gt;`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.
     */
    version?: string | null;
  }
  /**
   * `Authentication` defines the authentication configuration for an API.  Example for an API targeted for external use:      name: calendar.googleapis.com     authentication:       providers:       - id: google_calendar_auth         jwks_uri: https://www.googleapis.com/oauth2/v1/certs         issuer: https://securetoken.google.com       rules:       - selector: &quot;*&quot;         requirements:           provider_id: google_calendar_auth
   */
  export interface Schema$Authentication {
    /**
     * Defines a set of authentication providers that a service supports.
     */
    providers?: Schema$AuthProvider[];
    /**
     * A list of authentication rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$AuthenticationRule[];
  }
  /**
   * Authentication rules for the service.  By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It&#39;s an error to include more than one kind of credential in a single request.  If a method doesn&#39;t have any auth requirements, request credentials will be ignored.
   */
  export interface Schema$AuthenticationRule {
    /**
     * If true, the service accepts API keys without any other credential.
     */
    allowWithoutCredential?: boolean | null;
    /**
     * The requirements for OAuth credentials.
     */
    oauth?: Schema$OAuthRequirements;
    /**
     * Requirements for additional authentication providers.
     */
    requirements?: Schema$AuthRequirement[];
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
   */
  export interface Schema$AuthProvider {
    /**
     * The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience &quot;https://Service_name/API_name&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.  Example:      audiences: bookstore_android.apps.googleusercontent.com,                bookstore_web.apps.googleusercontent.com
     */
    audiences?: string | null;
    /**
     * Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     */
    authorizationUrl?: string | null;
    /**
     * The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`.  Example: &quot;bookstore_auth&quot;.
     */
    id?: string | null;
    /**
     * Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address.  Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com
     */
    issuer?: string | null;
    /**
     * URL of the provider&#39;s public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document:  - can be retrieved from    [OpenID    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html of    the issuer.  - can be inferred from the email domain of the issuer (e.g. a Google  service account).  Example: https://www.googleapis.com/oauth2/v1/certs
     */
    jwksUri?: string | null;
  }
  /**
   * User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
   */
  export interface Schema$AuthRequirement {
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components.  The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience &quot;https://Service_name/API_name&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.  Example:      audiences: bookstore_android.apps.googleusercontent.com,                bookstore_web.apps.googleusercontent.com
     */
    audiences?: string | null;
    /**
     * id from authentication provider.  Example:      provider_id: bookstore_auth
     */
    providerId?: string | null;
  }
  /**
   * `Backend` defines the backend configuration for a service.
   */
  export interface Schema$Backend {
    /**
     * A list of API backend rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$BackendRule[];
  }
  /**
   * A backend rule provides configuration for an individual API element.
   */
  export interface Schema$BackendRule {
    /**
     * The address of the API backend.
     */
    address?: string | null;
    /**
     * The number of seconds to wait for a response from a request.  The default deadline for gRPC is infinite (no deadline) and HTTP requests is 5 seconds.
     */
    deadline?: number | null;
    /**
     * When disable_auth is false,  a JWT ID token will be generated with the value from BackendRule.address as jwt_audience, overrode to the HTTP &quot;Authorization&quot; request header and sent to the backend.  When disable_auth is true, a JWT ID token won&#39;t be generated and the original &quot;Authorization&quot; HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header.
     */
    disableAuth?: boolean | null;
    /**
     * The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP &quot;authorization&quot; header, and sent to the backend.
     */
    jwtAudience?: string | null;
    /**
     * Minimum deadline in seconds needed for this method. Calls having deadline value lower than this will be rejected.
     */
    minDeadline?: number | null;
    /**
     * The number of seconds to wait for the completion of a long running operation. The default is no deadline.
     */
    operationDeadline?: number | null;
    pathTranslation?: string | null;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Billing related configuration of the service.  The following example shows how to configure monitored resources and metrics for billing:      monitored_resources:     - type: library.googleapis.com/branch       labels:       - key: /city         description: The city where the library branch is located in.       - key: /name         description: The name of the branch.     metrics:     - name: library.googleapis.com/book/borrowed_count       metric_kind: DELTA       value_type: INT64     billing:       consumer_destinations:       - monitored_resource: library.googleapis.com/branch         metrics:         - library.googleapis.com/book/borrowed_count
   */
  export interface Schema$Billing {
    /**
     * Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination.
     */
    consumerDestinations?: Schema$BillingDestination[];
  }
  /**
   * Configuration of a specific billing destination (Currently only support bill against consumer project).
   */
  export interface Schema$BillingDestination {
    /**
     * Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section.
     */
    metrics?: string[] | null;
    /**
     * The monitored resource type. The type must be defined in Service.monitored_resources section.
     */
    monitoredResource?: string | null;
  }
  /**
   * Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer&#39;s VPC network and a service consumer&#39;s VPC network.
   */
  export interface Schema$Connection {
    /**
     * The name of service consumer&#39;s VPC network that&#39;s connected with service producer network, in the following format: `projects/{project}/global/networks/{network}`. `{project}` is a project number, such as in `12345` that includes the VPC service consumer&#39;s VPC network. `{network}` is the name of the service consumer&#39;s VPC network.
     */
    network?: string | null;
    /**
     * Output only. The name of the VPC Network Peering connection that was created by the service producer.
     */
    peering?: string | null;
    /**
     * The name of one or more allocated IP address ranges for this service producer of type `PEERING`. Note that invoking this method with a different range when connection is already established will not modify already provisioned service producer subnetworks.
     */
    reservedPeeringRanges?: string[] | null;
    /**
     * Output only. The name of the peering service that&#39;s associated with this connection, in the following format: `services/{service name}`.
     */
    service?: string | null;
  }
  /**
   * `Context` defines which contexts an API requests.  Example:      context:       rules:       - selector: &quot;*&quot;         requested:         - google.rpc.context.ProjectContext         - google.rpc.context.OriginContext  The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`.  Available context types are defined in package `google.rpc.context`.  This also provides mechanism to whitelist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext-&lt;extension_id&gt;-bin” and “x-goog-ext-&lt;extension_id&gt;-jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file:  Example:      context:       rules:        - selector: &quot;google.example.library.v1.LibraryService.CreateBook&quot;          allowed_request_extensions:          - google.foo.v1.NewExtension          allowed_response_extensions:          - google.foo.v1.NewExtension  You can also specify extension ID instead of fully qualified extension name here.
   */
  export interface Schema$Context {
    /**
     * A list of RPC context rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$ContextRule[];
  }
  /**
   * A context rule provides information about the context for an individual API element.
   */
  export interface Schema$ContextRule {
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend.
     */
    allowedRequestExtensions?: string[] | null;
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client.
     */
    allowedResponseExtensions?: string[] | null;
    /**
     * A list of full type names of provided contexts.
     */
    provided?: string[] | null;
    /**
     * A list of full type names of requested contexts.
     */
    requested?: string[] | null;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Selects and configures the service controller used by the service.  The service controller handles features like abuse, quota, billing, logging, monitoring, etc.
   */
  export interface Schema$Control {
    /**
     * The service control environment to use. If empty, no control plane feature (like quota and billing) will be enabled.
     */
    environment?: string | null;
  }
  /**
   * Customize service error responses.  For example, list any service specific protobuf types that can appear in error detail lists of error responses.  Example:      custom_error:       types:       - google.foo.v1.CustomError       - google.foo.v1.AnotherError
   */
  export interface Schema$CustomError {
    /**
     * The list of custom error rules that apply to individual API messages.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$CustomErrorRule[];
    /**
     * The list of custom error detail types, e.g. &#39;google.foo.v1.CustomError&#39;.
     */
    types?: string[] | null;
  }
  /**
   * A custom error rule.
   */
  export interface Schema$CustomErrorRule {
    /**
     * Mark this message as possible payload in error response.  Otherwise, objects of this type will be filtered when they appear in error payload.
     */
    isErrorType?: boolean | null;
    /**
     * Selects messages to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * A custom pattern is used for defining custom HTTP verb.
   */
  export interface Schema$CustomHttpPattern {
    /**
     * The name of this custom HTTP verb.
     */
    kind?: string | null;
    /**
     * The path matched by this custom verb.
     */
    path?: string | null;
  }
  /**
   * `Documentation` provides the information for describing a service.  Example: &lt;pre&gt;&lt;code&gt;documentation:   summary: &gt;     The Google Calendar API gives access     to most calendar features.   pages:   - name: Overview     content: &amp;#40;== include google/foo/overview.md ==&amp;#41;   - name: Tutorial     content: &amp;#40;== include google/foo/tutorial.md ==&amp;#41;     subpages;     - name: Java       content: &amp;#40;== include google/foo/tutorial_java.md ==&amp;#41;   rules:   - selector: google.calendar.Calendar.Get     description: &gt;       ...   - selector: google.calendar.Calendar.Put     description: &gt;       ... &lt;/code&gt;&lt;/pre&gt; Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded.  Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided.  A number of constructs specific to the API platform are supported in documentation text.  In order to reference a proto element, the following notation can be used: &lt;pre&gt;&lt;code&gt;&amp;#91;fully.qualified.proto.name]&amp;#91;]&lt;/code&gt;&lt;/pre&gt; To override the display text used for the link, this can be used: &lt;pre&gt;&lt;code&gt;&amp;#91;display text]&amp;#91;fully.qualified.proto.name]&lt;/code&gt;&lt;/pre&gt; Text can be excluded from doc using the following notation: &lt;pre&gt;&lt;code&gt;&amp;#40;-- internal comment --&amp;#41;&lt;/code&gt;&lt;/pre&gt;  A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: &lt;pre&gt;&lt;code&gt;&amp;#40;== include path/to/file ==&amp;#41;&lt;/code&gt;&lt;/pre&gt; The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: &lt;pre&gt;&lt;code&gt;&amp;#40;== resource_for v1.shelves.books ==&amp;#41;&lt;/code&gt;&lt;/pre&gt; The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation.
   */
  export interface Schema$Documentation {
    /**
     * The URL to the root of documentation.
     */
    documentationRootUrl?: string | null;
    /**
     * Declares a single overview page. For example: &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   overview: &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; This is a shortcut for the following declaration (using pages style): &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   pages:   - name: Overview     content: &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; Note: you cannot specify both `overview` field and `pages` field.
     */
    overview?: string | null;
    /**
     * The top level pages for the documentation set.
     */
    pages?: Schema$Page[];
    /**
     * A list of documentation rules that apply to individual API elements.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$DocumentationRule[];
    /**
     * Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to.
     */
    serviceRootUrl?: string | null;
    /**
     * A short summary of what the service does. Can only be provided by plain text.
     */
    summary?: string | null;
  }
  /**
   * A documentation rule provides information about individual API elements.
   */
  export interface Schema$DocumentationRule {
    /**
     * Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`.
     */
    deprecationDescription?: string | null;
    /**
     * Description of the selected API(s).
     */
    description?: string | null;
    /**
     * The selector is a comma-separated list of patterns. Each pattern is a qualified name of the element which may end in &quot;*&quot;, indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. &quot;foo.*&quot; is ok, but not &quot;foo.b*&quot; or &quot;foo.*.bar&quot;. A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern &quot;*&quot; is used.
     */
    selector?: string | null;
  }
  /**
   * `Endpoint` describes a network endpoint that serves a set of APIs. A service may expose any number of endpoints, and all endpoints share the same service configuration, such as quota configuration and monitoring configuration.  Example service configuration:      name: library-example.googleapis.com     endpoints:       # Below entry makes &#39;google.example.library.v1.Library&#39;       # API be served from endpoint address library-example.googleapis.com.       # It also allows HTTP OPTIONS calls to be passed to the backend, for       # it to decide whether the subsequent cross-origin request is       # allowed to proceed.     - name: library-example.googleapis.com       allow_cors: true
   */
  export interface Schema$Endpoint {
    /**
     * DEPRECATED: This field is no longer supported. Instead of using aliases, please specify multiple google.api.Endpoint for each of the intended aliases.  Additional names that this endpoint will be hosted on.
     */
    aliases?: string[] | null;
    /**
     * Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed.
     */
    allowCors?: boolean | null;
    /**
     * The list of features enabled on this endpoint.
     */
    features?: string[] | null;
    /**
     * The canonical name of this endpoint.
     */
    name?: string | null;
    /**
     * The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, &quot;8.8.8.8&quot; or &quot;myservice.appspot.com&quot;.
     */
    target?: string | null;
  }
  /**
   * Enum type definition.
   */
  export interface Schema$Enum {
    /**
     * Enum value definitions.
     */
    enumvalue?: Schema$EnumValue[];
    /**
     * Enum type name.
     */
    name?: string | null;
    /**
     * Protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * The source context.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax.
     */
    syntax?: string | null;
  }
  /**
   * Enum value definition.
   */
  export interface Schema$EnumValue {
    /**
     * Enum value name.
     */
    name?: string | null;
    /**
     * Enum value number.
     */
    number?: number | null;
    /**
     * Protocol buffer options.
     */
    options?: Schema$Option[];
  }
  /**
   * A single field of a message type.
   */
  export interface Schema$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string | null;
    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string | null;
    /**
     * The field JSON name.
     */
    jsonName?: string | null;
    /**
     * The field type.
     */
    kind?: string | null;
    /**
     * The field name.
     */
    name?: string | null;
    /**
     * The field number.
     */
    number?: number | null;
    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number | null;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean | null;
    /**
     * The field type URL, without the scheme, for message or enumeration types. Example: `&quot;type.googleapis.com/google.protobuf.Timestamp&quot;`.
     */
    typeUrl?: string | null;
  }
  /**
   * Represents a subnet that was created or discovered by a private access management service.
   */
  export interface Schema$GoogleCloudServicenetworkingV1betaSubnetwork {
    /**
     * Subnetwork CIDR range in `10.x.x.x/y` format.
     */
    ipCidrRange?: string | null;
    /**
     * Subnetwork name. See https://cloud.google.com/compute/docs/vpc/
     */
    name?: string | null;
    /**
     * In the Shared VPC host project, the VPC network that&#39;s peered with the consumer network. For example: `projects/1234321/global/networks/host-network`
     */
    network?: string | null;
    /**
     * This is a discovered subnet that is not within the current consumer allocated ranges.
     */
    outsideAllocation?: boolean | null;
  }
  /**
   * Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
   */
  export interface Schema$Http {
    /**
     * When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where &quot;%2F&quot; will be left encoded.  The default behavior is to not decode RFC 6570 reserved characters in multi segment matches.
     */
    fullyDecodeReservedExpansion?: boolean | null;
    /**
     * A list of HTTP configuration rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$HttpRule[];
  }
  /**
   * # gRPC Transcoding  gRPC Transcoding is a feature for mapping between a gRPC method and one or more HTTP REST endpoints. It allows developers to build a single API service that supports both gRPC APIs and REST APIs. Many systems, including [Google APIs](https://github.com/googleapis/googleapis), [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC Gateway](https://github.com/grpc-ecosystem/grpc-gateway), and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature and use it for large scale production services.  `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies how different portions of the gRPC request message are mapped to the URL path, URL query parameters, and HTTP request body. It also controls how the gRPC response message is mapped to the HTTP response body. `HttpRule` is typically specified as an `google.api.http` annotation on the gRPC method.  Each mapping specifies a URL path template and an HTTP method. The path template may refer to one or more fields in the gRPC request message, as long as each field is a non-repeated field with a primitive (non-message) type. The path template controls how fields of the request message are mapped to the URL path.  Example:      service Messaging {       rpc GetMessage(GetMessageRequest) returns (Message) {         option (google.api.http) = {             get: &quot;/v1/{name=messages/*}&quot;         };       }     }     message GetMessageRequest {       string name = 1; // Mapped to URL path.     }     message Message {       string text = 1; // The resource content.     }  This enables an HTTP REST to gRPC mapping as below:  HTTP | gRPC -----|----- `GET /v1/messages/123456`  | `GetMessage(name: &quot;messages/123456&quot;)`  Any fields in the request message which are not bound by the path template automatically become HTTP query parameters if there is no HTTP request body. For example:      service Messaging {       rpc GetMessage(GetMessageRequest) returns (Message) {         option (google.api.http) = {             get:&quot;/v1/messages/{message_id}&quot;         };       }     }     message GetMessageRequest {       message SubMessage {         string subfield = 1;       }       string message_id = 1; // Mapped to URL path.       int64 revision = 2;    // Mapped to URL query parameter `revision`.       SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.     }  This enables a HTTP JSON to RPC mapping as below:  HTTP | gRPC -----|----- `GET /v1/messages/123456?revision=2&amp;sub.subfield=foo` | `GetMessage(message_id: &quot;123456&quot; revision: 2 sub: SubMessage(subfield: &quot;foo&quot;))`  Note that fields which are mapped to URL query parameters must have a primitive type or a repeated primitive type or a non-repeated message type. In the case of a repeated type, the parameter can be repeated in the URL as `...?param=A&amp;param=B`. In the case of a message type, each field of the message is mapped to a separate parameter, such as `...?foo.a=A&amp;foo.b=B&amp;foo.c=C`.  For HTTP methods that allow a request body, the `body` field specifies the mapping. Consider a REST update method on the message resource collection:      service Messaging {       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {         option (google.api.http) = {           patch: &quot;/v1/messages/{message_id}&quot;           body: &quot;message&quot;         };       }     }     message UpdateMessageRequest {       string message_id = 1; // mapped to the URL       Message message = 2;   // mapped to the body     }  The following HTTP JSON to RPC mapping is enabled, where the representation of the JSON in the request body is determined by protos JSON encoding:  HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { &quot;text&quot;: &quot;Hi!&quot; }` | `UpdateMessage(message_id: &quot;123456&quot; message { text: &quot;Hi!&quot; })`  The special name `*` can be used in the body mapping to define that every field not bound by the path template should be mapped to the request body.  This enables the following alternative definition of the update method:      service Messaging {       rpc UpdateMessage(Message) returns (Message) {         option (google.api.http) = {           patch: &quot;/v1/messages/{message_id}&quot;           body: &quot;*&quot;         };       }     }     message Message {       string message_id = 1;       string text = 2;     }   The following HTTP JSON to RPC mapping is enabled:  HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { &quot;text&quot;: &quot;Hi!&quot; }` | `UpdateMessage(message_id: &quot;123456&quot; text: &quot;Hi!&quot;)`  Note that when using `*` in the body mapping, it is not possible to have HTTP parameters, as all fields not bound by the path end in the body. This makes this option more rarely used in practice when defining REST APIs. The common usage of `*` is in custom methods which don&#39;t use the URL at all for transferring data.  It is possible to define multiple HTTP methods for one RPC by using the `additional_bindings` option. Example:      service Messaging {       rpc GetMessage(GetMessageRequest) returns (Message) {         option (google.api.http) = {           get: &quot;/v1/messages/{message_id}&quot;           additional_bindings {             get: &quot;/v1/users/{user_id}/messages/{message_id}&quot;           }         };       }     }     message GetMessageRequest {       string message_id = 1;       string user_id = 2;     }  This enables the following two alternative HTTP JSON to RPC mappings:  HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(message_id: &quot;123456&quot;)` `GET /v1/users/me/messages/123456` | `GetMessage(user_id: &quot;me&quot; message_id: &quot;123456&quot;)`  ## Rules for HTTP mapping  1. Leaf request fields (recursive expansion nested messages in the request    message) are classified into three categories:    - Fields referred by the path template. They are passed via the URL path.    - Fields referred by the HttpRule.body. They are passed via the HTTP      request body.    - All other fields are passed via the URL query parameters, and the      parameter name is the field path in the request message. A repeated      field can be represented as multiple query parameters under the same      name.  2. If HttpRule.body is &quot;*&quot;, there is no URL query parameter, all fields     are passed via URL path and HTTP request body.  3. If HttpRule.body is omitted, there is no HTTP request body, all     fields are passed via URL path and URL query parameters.  ### Path template syntax      Template = &quot;/&quot; Segments [ Verb ] ;     Segments = Segment { &quot;/&quot; Segment } ;     Segment  = &quot;*&quot; | &quot;**&quot; | LITERAL | Variable ;     Variable = &quot;{&quot; FieldPath [ &quot;=&quot; Segments ] &quot;}&quot; ;     FieldPath = IDENT { &quot;.&quot; IDENT } ;     Verb     = &quot;:&quot; LITERAL ;  The syntax `*` matches a single URL path segment. The syntax `**` matches zero or more URL path segments, which must be the last part of the URL path except the `Verb`.  The syntax `Variable` matches part of the URL path as specified by its template. A variable template must not contain other variables. If a variable matches a single path segment, its template may be omitted, e.g. `{var}` is equivalent to `{var=*}`.  The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL` contains any reserved character, such characters should be percent-encoded before the matching.  If a variable contains exactly one path segment, such as `&quot;{var}&quot;` or `&quot;{var=*}&quot;`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{var}`.  If a variable contains multiple path segments, such as `&quot;{var=foo/*}&quot;` or `&quot;{var=**}&quot;`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding, except &quot;%2F&quot; and &quot;%2f&quot; are left unchanged. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{+var}`.  ## Using gRPC API Service Configuration  gRPC API Service Configuration (service config) is a configuration language for configuring a gRPC service to become a user-facing product. The service config is simply the YAML representation of the `google.api.Service` proto message.  As an alternative to annotating your proto file, you can configure gRPC transcoding in your service config YAML files. You do this by specifying a `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same effect as the proto annotation. This can be particularly useful if you have a proto that is reused in multiple services. Note that any transcoding specified in the service config will override any matching transcoding configuration in the proto.  Example:      http:       rules:         # Selects a gRPC method and applies HttpRule to it.         - selector: example.v1.Messaging.GetMessage           get: /v1/messages/{message_id}/{sub.subfield}  ## Special notes  When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the proto to JSON conversion must follow the [proto3 specification](https://developers.google.com/protocol-buffers/docs/proto3#json).  While the single segment variable follows the semantics of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String Expansion, the multi segment variable **does not** follow RFC 6570 Section 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion does not expand special characters like `?` and `#`, which would lead to invalid URLs. As the result, gRPC Transcoding uses a custom encoding for multi segment variables.  The path variables **must not** refer to any repeated or mapped field, because client libraries are not capable of handling such variable expansion.  The path variables **must not** capture the leading &quot;/&quot; character. The reason is that the most common use case &quot;{var}&quot; does not capture the leading &quot;/&quot; character. For consistency, all path variables must share the same behavior.  Repeated message fields must not be mapped to URL query parameters, because no client library can support such complicated mapping.  If an API needs to use a JSON array for request or response body, it can map the request or response body to a repeated field. However, some gRPC Transcoding implementations may not support this feature.
   */
  export interface Schema$HttpRule {
    /**
     * Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep).
     */
    additionalBindings?: Schema$HttpRule[];
    /**
     * The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body.  NOTE: the referred field must be present at the top-level of the request message type.
     */
    body?: string | null;
    /**
     * The custom pattern is used for specifying an HTTP method that is not included in the `pattern` field, such as HEAD, or &quot;*&quot; to leave the HTTP method unspecified for this rule. The wild-card rule is useful for services that provide content to Web (HTML) clients.
     */
    custom?: Schema$CustomHttpPattern;
    /**
     * Maps to HTTP DELETE. Used for deleting a resource.
     */
    delete?: string | null;
    /**
     * Maps to HTTP GET. Used for listing and getting information about resources.
     */
    get?: string | null;
    /**
     * Maps to HTTP PATCH. Used for updating a resource.
     */
    patch?: string | null;
    /**
     * Maps to HTTP POST. Used for creating a resource or performing an action.
     */
    post?: string | null;
    /**
     * Maps to HTTP PUT. Used for replacing a resource.
     */
    put?: string | null;
    /**
     * Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body.  NOTE: The referred field must be present at the top-level of the response message type.
     */
    responseBody?: string | null;
    /**
     * Selects a method to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * A description of a label.
   */
  export interface Schema$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string | null;
    /**
     * The label key.
     */
    key?: string | null;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string | null;
  }
  /**
   * ListConnectionsResponse is the response to list peering states for the given service and consumer project.
   */
  export interface Schema$ListConnectionsResponse {
    /**
     * The list of Connections.
     */
    connections?: Schema$Connection[];
  }
  /**
   * A description of a log type. Example in YAML format:      - name: library.googleapis.com/activity_history       description: The history of borrowing and returning library items.       display_name: Activity       labels:       - key: /customer_id         description: Identifier of a library customer
   */
  export interface Schema$LogDescriptor {
    /**
     * A human-readable description of this log. This information appears in the documentation and can contain details.
     */
    description?: string | null;
    /**
     * The human-readable name for this log. This information appears on the user interface and should be concise.
     */
    displayName?: string | null;
    /**
     * The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.].
     */
    name?: string | null;
  }
  /**
   * Logging configuration of the service.  The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project.      monitored_resources:     - type: library.googleapis.com/branch       labels:       - key: /city         description: The city where the library branch is located in.       - key: /name         description: The name of the branch.     logs:     - name: activity_history       labels:       - key: /customer_id     - name: purchase_history     logging:       producer_destinations:       - monitored_resource: library.googleapis.com/branch         logs:         - activity_history         - purchase_history       consumer_destinations:       - monitored_resource: library.googleapis.com/branch         logs:         - activity_history
   */
  export interface Schema$Logging {
    /**
     * Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination.
     */
    consumerDestinations?: Schema$LoggingDestination[];
    /**
     * Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination.
     */
    producerDestinations?: Schema$LoggingDestination[];
  }
  /**
   * Configuration of a specific logging destination (the producer project or the consumer project).
   */
  export interface Schema$LoggingDestination {
    /**
     * Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by &quot;/&quot;.
     */
    logs?: string[] | null;
    /**
     * The monitored resource type. The type must be defined in the Service.monitored_resources section.
     */
    monitoredResource?: string | null;
  }
  /**
   * Method represents a method of an API interface.
   */
  export interface Schema$Method {
    /**
     * The simple name of this method.
     */
    name?: string | null;
    /**
     * Any metadata attached to the method.
     */
    options?: Schema$Option[];
    /**
     * If true, the request is streamed.
     */
    requestStreaming?: boolean | null;
    /**
     * A URL of the input message type.
     */
    requestTypeUrl?: string | null;
    /**
     * If true, the response is streamed.
     */
    responseStreaming?: boolean | null;
    /**
     * The URL of the output message type.
     */
    responseTypeUrl?: string | null;
    /**
     * The source syntax of this method.
     */
    syntax?: string | null;
  }
  /**
   * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type&#39;s existing data unusable.
   */
  export interface Schema$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string | null;
    /**
     * A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example &quot;Request count&quot;. This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
     */
    displayName?: string | null;
    /**
     * The set of labels that can be used to describe a specific instance of this metric type. For example, the `appengine.googleapis.com/http/server/response_latencies` metric type has a label for the HTTP response code, `response_code`, so you can look at latencies for successful responses or just for responses that failed.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The launch stage of the metric definition.
     */
    launchStage?: string | null;
    /**
     * Optional. Metadata which can be used to guide usage of the metric.
     */
    metadata?: Schema$MetricDescriptorMetadata;
    /**
     * Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
     */
    metricKind?: string | null;
    /**
     * Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.
     */
    monitoredResourceTypes?: string[] | null;
    /**
     * The resource name of the metric descriptor.
     */
    name?: string | null;
    /**
     * The metric type, including its DNS name prefix. The type is not URL-encoded.  All user-defined metric types have the DNS name `custom.googleapis.com` or `external.googleapis.com`.  Metric types should use a natural hierarchical grouping. For example:      &quot;custom.googleapis.com/invoice/paid/amount&quot;     &quot;external.googleapis.com/prometheus/up&quot;     &quot;appengine.googleapis.com/http/server/response_latencies&quot;
     */
    type?: string | null;
    /**
     * The units in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit` defines the representation of the stored metric values.  Different systems may scale the values to be more easily displayed (so a value of `0.02KBy` _might_ be displayed as `20By`, and a value of `3523KBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is `KBy`, then the value of the metric is always in thousands of bytes, no matter how it may be displayed..  If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005 CPU-seconds, then the value is written as `12005`.  Alternatively, if you want a custom metric to record data in a more granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`), or use `Kis{CPU}` and write `11.723` (which is `12005/1024`).  The supported units are a subset of [The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard:  **Basic units (UNIT)**  * `bit`   bit * `By`    byte * `s`     second * `min`   minute * `h`     hour * `d`     day  **Prefixes (PREFIX)**  * `k`     kilo    (10^3) * `M`     mega    (10^6) * `G`     giga    (10^9) * `T`     tera    (10^12) * `P`     peta    (10^15) * `E`     exa     (10^18) * `Z`     zetta   (10^21) * `Y`     yotta   (10^24)  * `m`     milli   (10^-3) * `u`     micro   (10^-6) * `n`     nano    (10^-9) * `p`     pico    (10^-12) * `f`     femto   (10^-15) * `a`     atto    (10^-18) * `z`     zepto   (10^-21) * `y`     yocto   (10^-24)  * `Ki`    kibi    (2^10) * `Mi`    mebi    (2^20) * `Gi`    gibi    (2^30) * `Ti`    tebi    (2^40) * `Pi`    pebi    (2^50)  **Grammar**  The grammar also includes these connectors:  * `/`    division or ratio (as an infix operator). For examples,          `kBy/{email}` or `MiBy/10ms` (although you should almost never          have `/s` in a metric `unit`; rates should always be computed at          query time from the underlying cumulative or delta value). * `.`    multiplication or composition (as an infix operator). For          examples, `GBy.d` or `k{watt}.h`.  The grammar for a unit is as follows:      Expression = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;      Component = ( [ PREFIX ] UNIT | &quot;%&quot; ) [ Annotation ]               | Annotation               | &quot;1&quot;               ;      Annotation = &quot;{&quot; NAME &quot;}&quot; ;  Notes:  * `Annotation` is just a comment if it follows a `UNIT`. If the annotation    is used alone, then the unit is equivalent to `1`. For examples,    `{request}/s == 1/s`, `By{transmitted}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not    containing `{` or `}`. * `1` represents a unitary [dimensionless    unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such    as in `1/s`. It is typically used when none of the basic units are    appropriate. For example, &quot;new users per day&quot; can be represented as    `1/d` or `{new-users}/d` (and a metric value `5` would mean &quot;5 new    users). Alternatively, &quot;thousands of page views per day&quot; would be    represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric    value of `5.3` would mean &quot;5300 page views per day&quot;). * `%` represents dimensionless value of 1/100, and annotates values giving    a percentage (so the metric values are typically in the range of 0..100,    and a metric value `3` means &quot;3 percent&quot;). * `10^2.%` indicates a metric contains a ratio, typically in the range    0..1, that will be multiplied by 100 and displayed as a percentage    (so a metric value `0.03` means &quot;3 percent&quot;).
     */
    unit?: string | null;
    /**
     * Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
     */
    valueType?: string | null;
  }
  /**
   * Additional annotations that can be used to guide the usage of a metric.
   */
  export interface Schema$MetricDescriptorMetadata {
    /**
     * The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
     */
    ingestDelay?: string | null;
    /**
     * Deprecated. Must use the MetricDescriptor.launch_stage instead.
     */
    launchStage?: string | null;
    /**
     * The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.
     */
    samplePeriod?: string | null;
  }
  /**
   * Bind API methods to metrics. Binding a method to a metric causes that metric&#39;s configured quota behaviors to apply to the method call.
   */
  export interface Schema$MetricRule {
    /**
     * Metrics to update when the selected methods are called, and the associated cost applied to each metric.  The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative.
     */
    metricCosts?: {[key: string]: string} | null;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows:  - If after comment and whitespace stripping, the documentation   string of the redeclared method is empty, it will be inherited   from the original method.  - Each annotation belonging to the service config (http,   visibility) which is not set in the redeclared method will be   inherited.  - If an http annotation is inherited, the path pattern will be   modified as follows. Any version prefix will be replaced by the   version of the including interface plus the root path if   specified.  Example of a simple mixin:      package google.acl.v1;     service AccessControl {       // Get the underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option (google.api.http).get = &quot;/v1/{resource=**}:getAcl&quot;;       }     }      package google.storage.v2;     service Storage {       //       rpc GetAcl(GetAclRequest) returns (Acl);        // Get a data record.       rpc GetData(GetDataRequest) returns (Data) {         option (google.api.http).get = &quot;/v2/{resource=**}&quot;;       }     }  Example of a mixin configuration:      apis:     - name: google.storage.v2.Storage       mixins:       - name: google.acl.v1.AccessControl  The mixin construct implies that all methods in `AccessControl` are also declared with same name and request/response types in `Storage`. A documentation generator or annotation processor will see the effective `Storage.GetAcl` method after inherting documentation and annotations as follows:      service Storage {       // Get the underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option (google.api.http).get = &quot;/v2/{resource=**}:getAcl&quot;;       }       ...     }  Note how the version in the path pattern changed from `v1` to `v2`.  If the `root` field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example:      apis:     - name: google.storage.v2.Storage       mixins:       - name: google.acl.v1.AccessControl         root: acls  This implies the following inherited HTTP annotation:      service Storage {       // Get the underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option (google.api.http).get = &quot;/v2/acls/{resource=**}:getAcl&quot;;       }       ...     }
   */
  export interface Schema$Mixin {
    /**
     * The fully qualified name of the interface which is included.
     */
    name?: string | null;
    /**
     * If non-empty specifies a path under which inherited HTTP paths are rooted.
     */
    root?: string | null;
  }
  /**
   * An object that describes the schema of a MonitoredResource object using a type name and a set of labels.  For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `&quot;gce_instance&quot;` and specifies the use of the labels `&quot;instance_id&quot;` and `&quot;zone&quot;` to identify particular VM instances.  Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API.
   */
  export interface Schema$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that might be used in documentation.
     */
    description?: string | null;
    /**
     * Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `&quot;Google Cloud SQL Database&quot;`.
     */
    displayName?: string | null;
    /**
     * Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels `&quot;database_id&quot;` and `&quot;zone&quot;`.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The launch stage of the monitored resource definition.
     */
    launchStage?: string | null;
    /**
     * Optional. The resource name of the monitored resource descriptor: `&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type.  APIs that do not use project information can use the resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
     */
    name?: string | null;
    /**
     * Required. The monitored resource type. For example, the type `&quot;cloudsql_database&quot;` represents databases in Google Cloud SQL. The maximum length of this value is 256 characters.
     */
    type?: string | null;
  }
  /**
   * Monitoring configuration of the service.  The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/overdue_count` metric is only sent to the consumer project.      monitored_resources:     - type: library.googleapis.com/branch       labels:       - key: /city         description: The city where the library branch is located in.       - key: /name         description: The name of the branch.     metrics:     - name: library.googleapis.com/book/returned_count       metric_kind: DELTA       value_type: INT64       labels:       - key: /customer_id     - name: library.googleapis.com/book/overdue_count       metric_kind: GAUGE       value_type: INT64       labels:       - key: /customer_id     monitoring:       producer_destinations:       - monitored_resource: library.googleapis.com/branch         metrics:         - library.googleapis.com/book/returned_count       consumer_destinations:       - monitored_resource: library.googleapis.com/branch         metrics:         - library.googleapis.com/book/returned_count         - library.googleapis.com/book/overdue_count
   */
  export interface Schema$Monitoring {
    /**
     * Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resouce type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
     */
    consumerDestinations?: Schema$MonitoringDestination[];
    /**
     * Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resouce type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
     */
    producerDestinations?: Schema$MonitoringDestination[];
  }
  /**
   * Configuration of a specific monitoring destination (the producer project or the consumer project).
   */
  export interface Schema$MonitoringDestination {
    /**
     * Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section.
     */
    metrics?: string[] | null;
    /**
     * The monitored resource type. The type must be defined in Service.monitored_resources section.
     */
    monitoredResource?: string | null;
  }
  /**
   * OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for &quot;Read-only access to Google Calendar&quot; and &quot;Access to Cloud Platform&quot;. Users can consent to a scope for an application, giving it permission to access that data on their behalf.  OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means.  In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs.  When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice.  Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
   */
  export interface Schema$OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted.  Example:       canonical_scopes: https://www.googleapis.com/auth/calendar,                        https://www.googleapis.com/auth/calendar.read
     */
    canonicalScopes?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
   */
  export interface Schema$Option {
    /**
     * The option&#39;s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `&quot;map_entry&quot;`. For custom options, it should be the fully-qualified name. For example, `&quot;google.api.http&quot;`.
     */
    name?: string | null;
    /**
     * The option&#39;s value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
   */
  export interface Schema$Page {
    /**
     * The Markdown content of the page. You can use &lt;code&gt;&amp;#40;== include {path} ==&amp;#41;&lt;/code&gt; to include content from a Markdown file.
     */
    content?: string | null;
    /**
     * The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: &lt;pre&gt;&lt;code&gt;pages: - name: Tutorial   content: &amp;#40;== include tutorial.md ==&amp;#41;   subpages:   - name: Java     content: &amp;#40;== include tutorial_java.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; You can reference `Java` page using Markdown reference link syntax: `Java`.
     */
    name?: string | null;
    /**
     * Subpages of this page. The order of subpages specified here will be honored in the generated docset.
     */
    subpages?: Schema$Page[];
  }
  /**
   * Quota configuration helps to achieve fairness and budgeting in service usage.  The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with   corresponding costs. - The quota.limits defines limits on the metrics, which will be used for   quota checks at runtime.  An example quota configuration in yaml format:     quota:      limits:       - name: apiWriteQpsPerProject        metric: library.googleapis.com/write_calls        unit: &quot;1/min/{project}&quot;  # rate limit for consumer projects        values:          STANDARD: 10000        # The metric rules bind all methods to the read_calls metric,      # except for the UpdateBook and DeleteBook methods. These two methods      # are mapped to the write_calls metric, with the UpdateBook method      # consuming at twice rate as the DeleteBook method.      metric_rules:      - selector: &quot;*&quot;        metric_costs:          library.googleapis.com/read_calls: 1      - selector: google.example.library.v1.LibraryService.UpdateBook        metric_costs:          library.googleapis.com/write_calls: 2      - selector: google.example.library.v1.LibraryService.DeleteBook        metric_costs:          library.googleapis.com/write_calls: 1   Corresponding Metric definition:       metrics:      - name: library.googleapis.com/read_calls        display_name: Read requests        metric_kind: DELTA        value_type: INT64       - name: library.googleapis.com/write_calls        display_name: Write requests        metric_kind: DELTA        value_type: INT64
   */
  export interface Schema$Quota {
    /**
     * List of `QuotaLimit` definitions for the service.
     */
    limits?: Schema$QuotaLimit[];
    /**
     * List of `MetricRule` definitions, each one mapping a selected method to one or more metrics.
     */
    metricRules?: Schema$MetricRule[];
  }
  /**
   * `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
   */
  export interface Schema$QuotaLimit {
    /**
     * Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project.  Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed.  Used by group-based quotas only.
     */
    defaultLimit?: string | null;
    /**
     * Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit&#39;s display name (see: `display_name`).
     */
    description?: string | null;
    /**
     * User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration.
     */
    displayName?: string | null;
    /**
     * Duration of this limit in textual notation. Must be &quot;100s&quot; or &quot;1d&quot;.  Used by group-based quotas only.
     */
    duration?: string | null;
    /**
     * Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration &quot;1d&quot;, in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service.  Used by group-based quotas only.
     */
    freeTier?: string | null;
    /**
     * Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit.  To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota.  Used by group-based quotas only.
     */
    maxLimit?: string | null;
    /**
     * The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config.
     */
    metric?: string | null;
    /**
     * Name of the quota limit.  The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as &#39;-&#39;.  The maximum length of the limit name is 64 characters.
     */
    name?: string | null;
    /**
     * Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system.  Here are some examples: * &quot;1/min/{project}&quot; for quota per minute per project.  Note: the order of unit components is insignificant. The &quot;1&quot; at the beginning is required to follow the metric unit syntax.
     */
    unit?: string | null;
    /**
     * Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported.
     */
    values?: {[key: string]: string} | null;
  }
  /**
   * Represents a found unused range.
   */
  export interface Schema$Range {
    /**
     * CIDR range in &quot;10.x.x.x/y&quot; format that is within the allocated ranges and currently unused.
     */
    ipCidrRange?: string | null;
    /**
     * In the Shared VPC host project, the VPC network that&#39;s peered with the consumer network. For example: `projects/1234321/global/networks/host-network`
     */
    network?: string | null;
  }
  /**
   * Request to search for an unused range within allocated ranges.
   */
  export interface Schema$SearchRangeRequest {
    /**
     * Required. The prefix length of the IP range. Use usual CIDR range notation. For example, &#39;30&#39; to find unused x.x.x.x/30 CIDR range. Actual range will be determined using allocated range for the consumer peered network and returned in the result.
     */
    ipPrefixLength?: number | null;
    /**
     * Network name in the consumer project.   This network must have been already peered with a shared VPC network using CreateConnection method. Must be in a form &#39;projects/{project}/global/networks/{network}&#39;. {project} is a project number, as in &#39;12345&#39; {network} is network name.
     */
    network?: string | null;
  }
  /**
   * `Service` is the root object of Google service configuration schema. It describes basic information about a service, such as the name and the title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. See each proto message definition for details.  Example:      type: google.api.Service     config_version: 3     name: calendar.googleapis.com     title: Google Calendar API     apis:     - name: google.calendar.v3.Calendar     authentication:       providers:       - id: google_calendar_auth         jwks_uri: https://www.googleapis.com/oauth2/v1/certs         issuer: https://securetoken.google.com       rules:       - selector: &quot;*&quot;         requirements:           provider_id: google_calendar_auth
   */
  export interface Schema$Service {
    /**
     * A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.
     */
    apis?: Schema$Api[];
    /**
     * Auth configuration.
     */
    authentication?: Schema$Authentication;
    /**
     * API backend configuration.
     */
    backend?: Schema$Backend;
    /**
     * Billing configuration.
     */
    billing?: Schema$Billing;
    /**
     * The semantic version of the service configuration. The config version affects the interpretation of the service configuration. For example, certain features are enabled by default for certain config versions. The latest config version is `3`.
     */
    configVersion?: number | null;
    /**
     * Context configuration.
     */
    context?: Schema$Context;
    /**
     * Configuration for the service control plane.
     */
    control?: Schema$Control;
    /**
     * Custom error configuration.
     */
    customError?: Schema$CustomError;
    /**
     * Additional API documentation.
     */
    documentation?: Schema$Documentation;
    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * A list of all enum types included in this API service.  Enums referenced directly or indirectly by the `apis` are automatically included.  Enums which are not referenced but shall be included should be listed here by name. Example:      enums:     - name: google.someapi.v1.SomeEnum
     */
    enums?: Schema$Enum[];
    /**
     * HTTP configuration.
     */
    http?: Schema$Http;
    /**
     * A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, &#39;.&#39;, &#39;_&#39; and &#39;-&#39; are allowed. If empty, the server may choose to generate one instead.
     */
    id?: string | null;
    /**
     * Logging configuration.
     */
    logging?: Schema$Logging;
    /**
     * Defines the logs used by this service.
     */
    logs?: Schema$LogDescriptor[];
    /**
     * Defines the metrics used by this service.
     */
    metrics?: Schema$MetricDescriptor[];
    /**
     * Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.
     */
    monitoredResources?: Schema$MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     */
    monitoring?: Schema$Monitoring;
    /**
     * The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name.
     */
    name?: string | null;
    /**
     * The Google project that owns this service.
     */
    producerProjectId?: string | null;
    /**
     * Quota configuration.
     */
    quota?: Schema$Quota;
    /**
     * Output only. The source information for this configuration if available.
     */
    sourceInfo?: Schema$SourceInfo;
    /**
     * System parameter configuration.
     */
    systemParameters?: Schema$SystemParameters;
    /**
     * A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.
     */
    systemTypes?: Schema$Type[];
    /**
     * The product title for this service.
     */
    title?: string | null;
    /**
     * A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included.  Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name. Example:      types:     - name: google.protobuf.Int32
     */
    types?: Schema$Type[];
    /**
     * Configuration controlling usage of this service.
     */
    usage?: Schema$Usage;
  }
  /**
   * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
   */
  export interface Schema$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated protobuf element.  For example: `&quot;google/protobuf/source_context.proto&quot;`.
     */
    fileName?: string | null;
  }
  /**
   * Source information used to create a Service Config
   */
  export interface Schema$SourceInfo {
    /**
     * All files used during config generation.
     */
    sourceFiles?: Array<{[key: string]: any}> | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a subnet that was created or discovered by a private access management service.
   */
  export interface Schema$Subnetwork {
    /**
     * Subnetwork CIDR range in `10.x.x.x/y` format.
     */
    ipCidrRange?: string | null;
    /**
     * Subnetwork name. See https://cloud.google.com/compute/docs/vpc/
     */
    name?: string | null;
    /**
     * In the Shared VPC host project, the VPC network that&#39;s peered with the consumer network. For example: `projects/1234321/global/networks/host-network`
     */
    network?: string | null;
    /**
     * This is a discovered subnet that is not within the current consumer allocated ranges.
     */
    outsideAllocation?: boolean | null;
  }
  /**
   * Define a parameter&#39;s name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
   */
  export interface Schema$SystemParameter {
    /**
     * Define the HTTP header name to use for the parameter. It is case insensitive.
     */
    httpHeader?: string | null;
    /**
     * Define the name of the parameter, such as &quot;api_key&quot; . It is case sensitive.
     */
    name?: string | null;
    /**
     * Define the URL query parameter name to use for the parameter. It is case sensitive.
     */
    urlQueryParameter?: string | null;
  }
  /**
   * Define a system parameter rule mapping system parameter definitions to methods.
   */
  export interface Schema$SystemParameterRule {
    /**
     * Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent.
     */
    parameters?: Schema$SystemParameter[];
    /**
     * Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * ### System parameter configuration  A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.
   */
  export interface Schema$SystemParameters {
    /**
     * Define system parameters.  The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent.  Example: define api key for all methods      system_parameters       rules:         - selector: &quot;*&quot;           parameters:             - name: api_key               url_query_parameter: api_key   Example: define 2 api key names for a specific method.      system_parameters       rules:         - selector: &quot;/ListShelves&quot;           parameters:             - name: api_key               http_header: Api-Key1             - name: api_key               http_header: Api-Key2  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$SystemParameterRule[];
  }
  /**
   * A protocol buffer message type.
   */
  export interface Schema$Type {
    /**
     * The list of fields.
     */
    fields?: Schema$Field[];
    /**
     * The fully qualified message name.
     */
    name?: string | null;
    /**
     * The list of types appearing in `oneof` definitions in this type.
     */
    oneofs?: string[] | null;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * The source context.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax.
     */
    syntax?: string | null;
  }
  /**
   * Configuration controlling usage of a service.
   */
  export interface Schema$Usage {
    /**
     * The full resource name of a channel used for sending notifications to the service producer.  Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview.
     */
    producerNotificationChannel?: string | null;
    /**
     * Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form &lt;service.name&gt;/&lt;requirement-id&gt;; for example &#39;serviceusage.googleapis.com/billing-enabled&#39;.
     */
    requirements?: string[] | null;
    /**
     * A list of usage rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$UsageRule[];
  }
  /**
   * Usage configuration rules for the service.  NOTE: Under development.   Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls.  Example of an API that wants to allow unregistered calls for entire service.      usage:       rules:       - selector: &quot;*&quot;         allow_unregistered_calls: true  Example of a method that wants to allow unregistered calls.      usage:       rules:       - selector: &quot;google.example.library.v1.LibraryService.CreateBook&quot;         allow_unregistered_calls: true
   */
  export interface Schema$UsageRule {
    /**
     * If true, the selected method allows unregistered calls, e.g. calls that don&#39;t identify any user or application.
     */
    allowUnregisteredCalls?: boolean | null;
    /**
     * Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs.  Refer to selector for syntax details.
     */
    selector?: string | null;
    /**
     * If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods.
     */
    skipServiceControl?: boolean | null;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicenetworking.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias servicenetworking.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicenetworking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Services {
    context: APIRequestContext;
    connections: Resource$Services$Connections;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connections = new Resource$Services$Connections(this.context);
    }

    /**
     * servicenetworking.services.addSubnetwork
     * @desc For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed. The response from the `get` operation will be of type `Subnetwork` if the operation successfully completes.
     * @alias servicenetworking.services.addSubnetwork
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. A tenant project in the service producer organization, in the following format: services/{service}/{collection-id}/{resource-id}. {collection-id} is the cloud resource collection type that represents the tenant project. Only `projects` are supported. {resource-id} is the tenant project numeric id, such as `123456`. {service} the name of the peering service, such as `service-peering.example.com`. This service must already be enabled in the service consumer's project.
     * @param {().AddSubnetworkRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addSubnetwork(
      params?: Params$Resource$Services$Addsubnetwork,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addSubnetwork(
      params: Params$Resource$Services$Addsubnetwork,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addSubnetwork(
      params: Params$Resource$Services$Addsubnetwork,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addSubnetwork(callback: BodyResponseCallback<Schema$Operation>): void;
    addSubnetwork(
      paramsOrCallback?:
        | Params$Resource$Services$Addsubnetwork
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Addsubnetwork;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Addsubnetwork;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicenetworking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:addSubnetwork').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * servicenetworking.services.searchRange
     * @desc Service producers can use this method to find a currently unused range within consumer allocated ranges.   This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation). Operation<response: Range>
     * @alias servicenetworking.services.searchRange
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. This is in a form services/{service}. {service} the name of the private access management service, for example 'service-peering.example.com'.
     * @param {().SearchRangeRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchRange(
      params?: Params$Resource$Services$Searchrange,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    searchRange(
      params: Params$Resource$Services$Searchrange,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    searchRange(
      params: Params$Resource$Services$Searchrange,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    searchRange(callback: BodyResponseCallback<Schema$Operation>): void;
    searchRange(
      paramsOrCallback?:
        | Params$Resource$Services$Searchrange
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Searchrange;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Searchrange;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicenetworking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:searchRange').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * servicenetworking.services.updateConnections
     * @desc Updates the allocated ranges that are assigned to a connection. The response from the `get` operation will be of type `Connection` if the operation successfully completes.
     * @alias servicenetworking.services.updateConnections
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force If a previously defined allocated range is removed, force flag must be set to true.
     * @param {string} params.name The service producer peering service that is managing peering connectivity for a service producer organization. For Google services that support this functionality, this is `services/servicenetworking.googleapis.com`.
     * @param {string=} params.updateMask The update mask. If this is omitted, it defaults to "*". You can only update the listed peering ranges.
     * @param {().Connection} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateConnections(
      params?: Params$Resource$Services$Updateconnections,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateConnections(
      params: Params$Resource$Services$Updateconnections,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateConnections(
      params: Params$Resource$Services$Updateconnections,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateConnections(callback: BodyResponseCallback<Schema$Operation>): void;
    updateConnections(
      paramsOrCallback?:
        | Params$Resource$Services$Updateconnections
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Updateconnections;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Updateconnections;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicenetworking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/connections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Addsubnetwork
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. A tenant project in the service producer organization, in the following format: services/{service}/{collection-id}/{resource-id}. {collection-id} is the cloud resource collection type that represents the tenant project. Only `projects` are supported. {resource-id} is the tenant project numeric id, such as `123456`. {service} the name of the peering service, such as `service-peering.example.com`. This service must already be enabled in the service consumer's project.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddSubnetworkRequest;
  }
  export interface Params$Resource$Services$Searchrange
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. This is in a form services/{service}. {service} the name of the private access management service, for example 'service-peering.example.com'.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchRangeRequest;
  }
  export interface Params$Resource$Services$Updateconnections
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If a previously defined allocated range is removed, force flag must be set to true.
     */
    force?: boolean;
    /**
     * The service producer peering service that is managing peering connectivity for a service producer organization. For Google services that support this functionality, this is `services/servicenetworking.googleapis.com`.
     */
    name?: string;
    /**
     * The update mask. If this is omitted, it defaults to "*". You can only update the listed peering ranges.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }

  export class Resource$Services$Connections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicenetworking.services.connections.create
     * @desc Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once. The response from the `get` operation will be of type `Connection` if the operation successfully completes.
     * @alias servicenetworking.services.connections.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     * @param {().Connection} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Services$Connections$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Services$Connections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Services$Connections$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Services$Connections$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Connections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Connections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicenetworking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/connections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * servicenetworking.services.connections.list
     * @desc List the private connections that are configured in a service consumer's VPC network.
     * @alias servicenetworking.services.connections.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.network The name of service consumer's VPC network that's connected with service producer network through a private connection. The network name must be in the following format: `projects/{project}/global/networks/{network}`. {project} is a project number, such as in `12345` that includes the VPC service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     * @param {string} params.parent The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`. If you specify `-` as the parameter value, all configured public peering services are listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Services$Connections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConnectionsResponse>;
    list(
      params: Params$Resource$Services$Connections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Services$Connections$List,
      callback: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListConnectionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Services$Connections$List
        | BodyResponseCallback<Schema$ListConnectionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectionsResponse>,
      callback?: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void | GaxiosPromise<Schema$ListConnectionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Connections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Connections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicenetworking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/connections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConnectionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListConnectionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Connections$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }
  export interface Params$Resource$Services$Connections$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of service consumer's VPC network that's connected with service producer network through a private connection. The network name must be in the following format: `projects/{project}/global/networks/{network}`. {project} is a project number, such as in `12345` that includes the VPC service consumer's VPC network. {network} is the name of the service consumer's VPC network.
     */
    network?: string;
    /**
     * The service that is managing peering connectivity for a service producer's organization. For Google services that support this functionality, this value is `services/servicenetworking.googleapis.com`. If you specify `-` as the parameter value, all configured public peering services are listed.
     */
    parent?: string;
  }
}
