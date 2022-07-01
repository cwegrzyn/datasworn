//License: MIT
type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength; }; export { Tuple };

