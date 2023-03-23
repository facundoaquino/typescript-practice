

enum badState {
  InProgress,
  Success,
  Fail
}

// infiere los indices numericos
badState.InProgress
badState.Success
badState.Fail

const badCheckState = (state: badState) => {
  //...
}

badCheckState(100)



// para una mejor implementacion podemos hacer un type o un enum con indices strings

type goodStateType = "InProgress" | "Success" |"Fail";

enum goodStateEnum {
  InProgress = "InProgress",
  Success = "Success",
  Fail = "Fail"
}

const goodCheckState = (state: goodStateEnum) => {
  //...
}

goodCheckState(goodStateEnum.Fail)