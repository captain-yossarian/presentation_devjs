module ContextualTyping =
    let foo x = x * 2
    let bar y = [ y, y + 1 ]
    
    //  val baz : z:'a list -> int
    let baz z = z |> List.length

    //  val composition : a:('a -> 'b) -> b:('b -> 'c) -> c:('c -> 'd) -> ('a -> 'd)
    let composition a b c = a >> b >> c

    //  val result : (int -> int)
    let result = composition foo bar baz
