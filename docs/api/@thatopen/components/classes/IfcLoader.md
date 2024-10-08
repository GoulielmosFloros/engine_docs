# IfcLoader

The IfcLoader component is responsible for loading and processing IFC files. It utilizes the Web-IFC library to handle the IFC data and the Three.js library for 3D rendering. The class provides methods for setting up, loading, and cleaning up IFC files. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcLoader).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onIfcStartedLoading

> `readonly` **onIfcStartedLoading**: [`Event`](Event.md)\<`void`\>

An event triggered when the IFC file starts loading.

***

### onSetup

> `readonly` **onSetup**: [`Event`](Event.md)\<`void`\>

An event triggered when the setup process is completed.

***

### settings

> **settings**: [`IfcFragmentSettings`](IfcFragmentSettings.md)

The settings for the IfcLoader.
It includes options for excluding categories, setting WASM paths, and more.

***

### webIfc

> **webIfc**: `IfcAPI`

The instance of the Web-IFC library used for handling IFC data.

***

### uuid

> `static` `readonly` **uuid**: `"a659add7-1418-4771-a0d6-7d4d438e4624"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### cleanUp()

> **cleanUp**(): `void`

Cleans up the IfcLoader component by resetting the Web-IFC library,
clearing the visited fragments and fragment instances maps, and creating a new instance of the Web-IFC library.

#### Returns

`void`

#### Remarks

This method is called automatically after using the .load() method, so usually you don't need to use it manually.

#### Example

```typescript
const ifcLoader = components.get(IfcLoader);
ifcLoader.cleanUp();
```

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### load()

> **load**(`data`, `coordinate`, `name`): `Promise`\<`FragmentsGroup`\>

Loads an IFC file and processes it for 3D visualization.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `Uint8Array` | `undefined` | The Uint8Array containing the IFC file data. |
| `coordinate` | `boolean` | `true` | Optional boolean indicating whether to coordinate the loaded IFC data. Default is true. |
| `name` | `string` | `""` | - |

#### Returns

`Promise`\<`FragmentsGroup`\>

A Promise that resolves to the FragmentsGroup containing the loaded and processed IFC data.

#### Example

```typescript
const ifcLoader = components.get(IfcLoader);
const group = await ifcLoader.load(ifcData);
```

***

### readIfcFile()

> **readIfcFile**(`data`): `Promise`\<`number`\>

Reads an IFC file and initializes the Web-IFC library.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The Uint8Array containing the IFC file data. |

#### Returns

`Promise`\<`number`\>

A Promise that resolves when the IFC file is opened and initialized.

#### Remarks

This method sets the WASM path and initializes the Web-IFC library based on the provided settings.
It also opens the IFC model using the provided data and settings.

#### Example

```typescript
const ifcLoader = components.get(IfcLoader);
await ifcLoader.readIfcFile(ifcData);
```

***

### setup()

> **setup**(`config`?): `Promise`\<`void`\>

Sets up the IfcLoader component with the provided configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | `Partial` \<[`IfcFragmentSettings`](IfcFragmentSettings.md)\> | Optional configuration settings for the IfcLoader. If not provided, the existing settings will be used. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the setup process is completed.

#### Remarks

If the `autoSetWasm` option is enabled in the configuration,
the method will automatically set the WASM paths for the Web-IFC library.

#### Example

```typescript
const ifcLoader = new IfcLoader(components);
await ifcLoader.setup({ autoSetWasm: true });
```
