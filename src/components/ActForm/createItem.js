export default function createItem(item, state, context) {
  switch (item.type) {
    case "input": //普通输入
      return (
        <el-input
          {...item}
          v-model={state.form[item.prop]}
          placeholder={item.placeholder}
          suffix-icon={item.icon}
          clearable={item.clearable}
          size={item.size ?? "default"}
        ></el-input>
      );
    case "password": //密码输入
      return (
        <el-input
          type="password"
          {...item}
          v-model={state.form[item.prop]}
          placeholder={item.placeholder}
          suffix-icon={item.icon}
          clearable={item.clearable}
          size={item.size ?? "default"}
        ></el-input>
      );
    case "textarea": //文本输入
      return (
        <el-input
          type="textarea"
          {...item}
          v-model={state.form[item.prop]}
          placeholder={item.placeholder}
          clearable={item.clearable}
        ></el-input>
      );
    case "numberInput": //数字输入
      return (
        <el-input
          type="text"
          {...item}
          v-model={state.form[item.prop]}
          onInput={(e) => handleNumberInput(e, item.prop, state)}
          autocomplete="off"
          placeholder={item.placeholder}
          suffix-icon={item.icon}
          clearable={item.clearable}
          size={item.size ?? "default"}
        />
      );
    case "select": //下拉框
      return (
        <el-select
          {...item}
          v-model={state.form[item.prop]}
          placeholder={item.placeholder}
          clearable={item.clearable}
          size={item.size ?? "default"}
          multiple={item.multiple ?? false}
          multiple-limit={item.multipleLimit ?? 1}
        >
          {item.options
            ? item.options.map((option) => (
                <el-option
                  label={option.label}
                  value={option.value}
                ></el-option>
              ))
            : null}
        </el-select>
      );
    case "switch": //开关
      return (
        <el-switch
          {...item}
          v-model={state.form[item.prop]}
          size={item.size ?? "default"}
        />
      );
    case "checkbox": //多选
      return (
        <el-checkbox-group
          {...item}
          v-model={state.form[item.prop]}
          size={item.size ?? "default"}
        >
          {item.options.map((option, index) => (
            <el-checkbox label={option.value} key={index}>
              {option.label}
            </el-checkbox>
          ))}
        </el-checkbox-group>
      );
    case "radio": //单选
      return (
        <el-radio-group
          {...item}
          v-model={state.form[item.prop]}
          size={item.size ?? "default"}
        >
          {item.options.map((option, index) => (
            <el-radio label={option.value} key={index}>
              {option.label}
            </el-radio>
          ))}
        </el-radio-group>
      );
    case "datePicker": //日期选择
      return (
        <el-date-picker
          v-model={state.form[item.prop]}
          type="date"
          placeholder={item.placeholder}
          clearable={item.clearable}
          size={item.size ?? "default"}
        />
      );
    case "datetimePicker": //日期时间选择
      return (
        <el-date-picker
          v-model={state.form[item.prop]}
          type="datetime"
          placeholder={item.placeholder}
          clearable={item.clearable}
          size={item.size ?? "default"}
        />
      );
    case "dateRangePicker": //日期区间选择
      return (
        <el-date-picker
          v-model={state.form[item.prop]}
          type="daterange"
          range-separator={item.separator ?? "-"}
          start-placeholder={item.startPlaceholder || "开始时间"}
          end-placeholder={item.endPlaceholder || "结束时间"}
          clearable={item.clearable}
          valueFormat={item.valueFormat || "YYYY-MM-DD"}
          size={item.size ?? "default"}
        />
      );
    case "datetimeRangePicker": //日期时间选择
      return (
        <el-date-picker
          v-model={state.form[item.prop]}
          type="datetimerange"
          range-separator={item.separator ?? "-"}
          start-placeholder={item.startPlaceholder || "开始时间"}
          end-placeholder={item.endPlaceholder || "结束时间"}
          clearable={item.clearable}
          size={item.size ?? "default"}
          value-format={item.valueFormat || "YYYY-MM-DD HH:mm:ss"}
        />
      );
    case "inputNumberRange": //数字范围
      return (
        <input-number-range
          v-model={state.form[item.prop]}
        ></input-number-range>
      );
    case "cascader": //级联菜单
      return (
        <el-cascader
          v-model={state.form[item.prop]}
          clearable={item.clearable}
          {...item}
          size={item.size ?? "default"}
        />
      );
    case "custom": //自定义
      return <div>{context.slots[item.prop]()}</div>;
  }
}

function handleNumberInput(e, prop, state) {
  if (!e) return;
  if (e.match(/\d+/g)) {
    state.form[prop] = Number(e.match(/\d+/g).join(""));
  } else {
    state.form[prop] = "";
  }
}
