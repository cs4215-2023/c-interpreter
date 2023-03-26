import { Context, Environment, TypeEnvironment, Variant } from './types'
import { Stack } from './utils/stack'

export class EnvTree {
  private _root: EnvTreeNode | null = null
  private map = new Map<Environment, EnvTreeNode>()

  get root(): EnvTreeNode | null {
    return this._root
  }

  public insert(environment: Environment): void {
    const tailEnvironment = environment.tail
    if (tailEnvironment === null) {
      if (this._root === null) {
        this._root = new EnvTreeNode(environment, null)
        this.map.set(environment, this._root)
      }
    } else {
      const parentNode = this.map.get(tailEnvironment)
      if (parentNode) {
        const childNode = new EnvTreeNode(environment, parentNode)
        parentNode.addChild(childNode)
        this.map.set(environment, childNode)
      }
    }
  }

  public getTreeNode(environment: Environment): EnvTreeNode | undefined {
    return this.map.get(environment)
  }
}

export class EnvTreeNode {
  private _children: EnvTreeNode[] = []

  constructor(readonly environment: Environment, public parent: EnvTreeNode | null) {}

  get children(): EnvTreeNode[] {
    return this._children
  }

  public resetChildren(newChildren: EnvTreeNode[]): void {
    this.clearChildren()
    this.addChildren(newChildren)
    newChildren.forEach(c => (c.parent = this))
  }

  private clearChildren(): void {
    this._children = []
  }

  private addChildren(newChildren: EnvTreeNode[]): void {
    this._children.push(...newChildren)
  }

  public addChild(newChild: EnvTreeNode): EnvTreeNode {
    this._children.push(newChild)
    return newChild
  }
}

export class TypeEnvTree {
  private _root: TypeEnvTreeNode | null = null
  private map = new Map<TypeEnvironment, TypeEnvTreeNode>()

  get root(): TypeEnvTreeNode | null {
    return this._root
  }

  public insert(environment: TypeEnvironment): void {
    const tailEnvironment = environment.tail
    if (tailEnvironment === null) {
      if (this._root === null) {
        this._root = new TypeEnvTreeNode(environment, null)
        this.map.set(environment, this._root)
      }
    } else {
      const parentNode = this.map.get(tailEnvironment)
      if (parentNode) {
        const childNode = new TypeEnvTreeNode(environment, parentNode)
        parentNode.addChild(childNode)
        this.map.set(environment, childNode)
      }
    }
  }

  public getTreeNode(environment: Environment): TypeEnvTreeNode | undefined {
    return this.map.get(environment)
  }
}

export class TypeEnvTreeNode {
  private _children: TypeEnvTreeNode[] = []

  constructor(readonly environment: TypeEnvironment, public parent: TypeEnvTreeNode | null) {}

  get children(): TypeEnvTreeNode[] {
    return this._children
  }

  public resetChildren(newChildren: TypeEnvTreeNode[]): void {
    this.clearChildren()
    this.addChildren(newChildren)
    newChildren.forEach(c => (c.parent = this))
  }

  private clearChildren(): void {
    this._children = []
  }

  private addChildren(newChildren: TypeEnvTreeNode[]): void {
    this._children.push(...newChildren)
  }

  public addChild(newChild: TypeEnvTreeNode): TypeEnvTreeNode {
    this._children.push(newChild)
    return newChild
  }
}

const createEmptyRuntime = () => ({
  break: false,
  debuggerOn: true,
  isRunning: false,
  environmentTree: new EnvTree(),
  environments: [],
  typeEnv: [],
  typeEnvTree: new TypeEnvTree(),
  value: undefined,
  nodes: [],
  stash: new Stack<any>(),
  agenda: new Stack<any>()
})

export const createEmptyContext = <T>(
  variant: Variant,
  externalSymbols: string[],
  externalContext?: T
): Context<T> => {
  return {
    externalSymbols,
    errors: [],
    externalContext,
    runtime: createEmptyRuntime(),
    numberOfOuterEnvironments: 1,
    prelude: null,
    executionMethod: 'auto',
    variant,
    unTypecheckedCode: [],
    previousCode: []
  }
}

const createContext = <T>(
  variant: Variant = Variant.DEFAULT,
  externalSymbols: string[] = [],
  externalContext?: T
): Context => {
  const context = createEmptyContext(variant, externalSymbols, externalContext)

  return context
}

export default createContext
