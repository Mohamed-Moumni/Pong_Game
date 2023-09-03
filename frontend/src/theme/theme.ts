"use client";
import {
  extendTheme,
  ThemeConfig,
  ComponentStyleConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const ProgressStyle: ComponentStyleConfig = {
  variants: {
    default: {
      colorScheme: "#252932",
      bg: "#5B6171",
      borderRadius: "full",
      p: "1px"
    }
  }
}

const ModalStyle: ComponentStyleConfig={
  // sizes:{
  //   invite:{
  //     content: {
  //       width: "362px",
  //       height: "386px"
  //     }
  //   }
  // },
  variants:{
    default:{
      dialog:{
        bg: "#252932",
        borderRadius: "20px",
        px: "30px",
        py: "40px"
      },
      body:{
        margin: "0px",
        padding: "0px"
      },
      closeButton: {
        fontStyle: "bold",
        fontSize: "8px",
        boxSize: "20px",
        borderRadius: "full",
        bg: "#DC585B",
        color: "#252932",
        _active:{
          transform: "scale(1.1)",
        }
      },
    },
    form:{
      dialog:{
        bg: "#252932",
        borderRadius: "20px",
        padding: "auto",
        px: "30px",
        py: "40px"
      },
      body:{
        margin: "0px",
        px: "0px",
        py: "10px"
      },
      closeButton: {
        fontStyle: "bold",
        fontSize: "8px",
        boxSize: "20px",
        borderRadius: "full",
        bg: "#DC585B",
        color: "#252932",
        _active:{
          transform: "scale(1.1)",
        }
      },
    }
  }
}

const ButtonStyle: ComponentStyleConfig = {
  // style object for base or default style
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
		bg: "#DC585B",
		fontSize: "20px",
		borderRadius: "50px",
		color: "#F5F5F5",
		py: "7px",
		px: "8px",
    _active: {
      // Customize the styles when button is active (clicked)
      transform: "scale(1.1)", // Increase the scale to make it grow
    },
	},
	secondary:{
    bg: "#F5F5F5",
    fontSize: "20px",
    borderRadius: "50px",
    color: "#DC585B",
    py: "7px",
    px: "8px",
    _active: {
      // Customize the styles when button is active (clicked)
      transform: "scale(1.1)", // Increase the scale to make it grow
    },
	},
	ghost:{
    bg: "transparent",
		color: "#5B6171",
		fontsize: "20px",
		alignContent: "center",
		py: "7px",
		px: "20px",
    _hover: {
      bg: "transparent",
      color: "#D9D9D9", // Change this to your desired hover text color
    },
    _active: {
      bg: "transparent",
      color: "#D9D9D9", // Change this to your desired hover text color
      transform: "scale(1.1)", // Increase the scale to make it grow
    }
	},
  icon:{
    borderRadius: "50px",
    px: "0px",
    // color: "#5B6171",
    _hover: {
      color: "#D9D9D9", // Change this to your desired hover text color
    },
    _active: {
      color: "#D9D9D9", // Change this to your desired hover text color
      transform: "scale(1.1)", // Increase the scale to make it grow
    },
  },
  field:{
    background: "transparent",
    color: "#5B6171",
    px: "0px",
    margin: "0px",
    _hover:{
      borderRadius: "15px",
      bg: "#5B6171",
      color: "#1D222C"
    },
    // _active: {
    //   transform: "scale(1.03)"
    // }
  }
  },
  // default values for 'size', 'variant' and 'colorScheme'
  // defaultProps: {
  //   size: "",
  //   variant: "primary",
  //   colorScheme: "",
  // },
};

const CheckboxStyle: ComponentStyleConfig= {
  variants: {
    default:{
      control:{
        width: "15px",
        height: "15px",
        color: "#F5F5F5",
        bg: "#1D222C",
        border: "0px",
        _active:{
          color: "#F5F5F5",
          bg: "#DC585B"
        },
        _checked:{
          border: "0px",
          color: "#F5F5F5",
          bg: "#DC585B",
          _hover:{
            color: "#F5F5F5",
            bg: "#DC585B"
          }
        },
        _hover:{
          color: "#F5F5F5",
          bg: "#252932"
        }
      },
      icon:{
        fontSize: "12px",
      }
    }
  }
}

const TabsStyle: ComponentStyleConfig = {
  variants: {
    default:{
      tablist:{
        p: "2px",
        bg: "#1D222C",
        borderRadius: "15px",
        display: 'flex',
        justifyContent: 'center',
      },
      tab:{
        fontWeight: "semibold",
        borderRadius: "13px",
        color: "#5B6171",
        bg: "#1D222C",
        py: "8px",
        _selected:{
          bg: "#5B6171",
          color: "#1D222C"
        }
      },
      tabpanel:{
        display: 'flex',
        justifyContent: 'center',
        w: "100%"
      }
    }
  }
}
const InputStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    default: {
		field: {
			backgroundColor: "#1D222C",
			marginBottom: "3px",
			borderRadius: "15px",
      color: "#5B6171",
      fontSize: "18px",
      textAlign: "center",
			"&::placeholder": {
        textAlign: "center",
			  color: "#5B6171",
			  fontSize: "18px",
			  fontSizeAdjust: "15px",
        opacity: "0.5"
        //   fontFamily: "Poppins",
			},
      _focus: {
        boxShadow: "3px 4px 5px 0px rgba(0, 0, 0, 0.12)", 
      },
		  },
	},
    secondary: {
		field: {
			backgroundColor: "#252932",
			marginBottom: "3px",
			borderRadius: "15px",
      color: "#5B6171",
      fontSize: "18px",
      textAlign: "center",
			"&::placeholder": {
        textAlign: "center",
			  color: "#5B6171",
			  fontSize: "18px",
			  fontSizeAdjust: "15px",
        opacity: "0.5"
        //   fontFamily: "Poppins",
			},
      _focus: {
        boxShadow: "3px 4px 5px 0px rgba(0, 0, 0, 0.12)", 
      },
		  },
	},
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: "",
    // variant: "",
    // colorScheme: "",
    // focusBorderColor: "primary",
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#252932",
        mx: "auto"
      },
    },
  },
  colors: {
    primaryDark: "#252932",
    secondDark: "#DC585B",
    thirdDark: "#F5F5F5",
    forthDark: "#5B6171"
  },
  components: {
    Input: InputStyle,
    Button: ButtonStyle,
    Tabs: TabsStyle,
    Progress: ProgressStyle,
    Checkbox: CheckboxStyle,
    Modal: ModalStyle
    },
  },
);

export default theme;
