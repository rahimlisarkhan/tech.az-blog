import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface InputType {
  id: string;
  name: string;
  label: string;
  type: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
}

export interface FormTypee {
  LOGIN: {
    title: string;
    initialValues: {
      username: string;
      password: string;
    };
    inputs: InputType[];
  };
  REGISTER: {
    title: string;
    initialValues: {
      username: string;
      first_name: string;
      last_name: string;
      email: string;
      password: string;
      password2: string;
    };
    inputs: InputType[];
  };
}

export const FORM: any = {
  LOGIN: {
    title: "Daxil ol",
    initialValues: {
      username: "",
      password: "",
    },
    inputs: [
      {
        id: "001",
        label: "istifadəçi adı",
        name: "username",
        type: "text",
        icon: PersonIcon,
      },
      {
        id: "002",
        label: "şifrə",
        name: "password",
        type: "password",
        icon: LockIcon,
      },
    ],
  },
  REGISTER: {
    title: "Qeydiyyat",
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
    },
    inputs: [
      {
        id: "003",
        label: "istifadəçi adı",
        name: "username",
        type: "text",
        icon: PersonIcon,
      },
      {
        id: "004",
        label: "adı",
        name: "first_name",
        type: "text",
        icon: PersonIcon,
      },
      {
        id: "005",
        label: "soyadi",
        name: "last_name",
        type: "text",
        icon: PersonIcon,
      },
      {
        id: "006",
        label: "email",
        name: "email",
        type: "email",
        icon: EmailIcon,
      },
      {
        id: "007",
        label: "şifrə",
        name: "password",
        type: "password",
        icon: LockIcon,
      },
      {
        id: "008",
        label: "təkrar şifrə",
        name: "password2",
        type: "password",
        icon: LockIcon,
      },
      // {
      //   id: "009",
      //   label: "iş",
      //   name: "position",
      //   type: "text",
      //   icon: WorkIcon,
      // },
      // {
      //   id: "010",
      //   label: "təhsil",
      //   name: "education",
      //   type: "text",
      //   icon: SchoolIcon,
      // },
      // { 
      //   id: "011",
      //   label: "doğum tarixi",
      //   name: "birthday",
      //   type: "date",
      //   icon: CakeIcon,
      // },
    ],
  },
};
