import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Ri24HoursFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />

      <div className="flex items-center gap-4 p-10">
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="small">boutton</Button>
        <Button size="small" variant="outline">
          boutton
        </Button>
        <Button size="small" variant="secondary">
          boutton
        </Button>
        <Button size="small" variant="disabled" disabled>
          boutton
        </Button>
        <Button
          size="small"
          variant="disabled"
          disabled
          icon={{ icon: Ri24HoursFill }}
          iconPosition="right"
        >
          boutton
        </Button>
        <Button
          size="small"
          variant="disabled"
          disabled
          icon={{ icon: Ri24HoursFill }}
          iconPosition="left"
        >
          boutton
        </Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
        ></Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          iconTheme="secondary"
        ></Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          iconTheme="gray"
        ></Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button isLoading size="small">
          boutton
        </Button>
        <Button isLoading size="small" variant="outline">
          boutton
        </Button>
        <Button isLoading size="small" variant="secondary">
          boutton
        </Button>
        <Button isLoading size="small" variant="disabled" disabled>
          boutton
        </Button>
        <Button
          size="small"
          variant="disabled"
          disabled
          icon={{ icon: Ri24HoursFill }}
          iconPosition="right"
          isLoading
        >
          boutton
        </Button>
        <Button
          size="small"
          variant="disabled"
          disabled
          icon={{ icon: Ri24HoursFill }}
          iconPosition="left"
          isLoading
        >
          boutton
        </Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          isLoading
        ></Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          isLoading
          iconTheme="secondary"
        ></Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          isLoading
          iconTheme="gray"
        ></Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button>boutton</Button>
        <Button variant="outline">boutton</Button>
        <Button variant="secondary">boutton</Button>
        <Button variant="disabled" disabled>
          boutton
        </Button>
        <Button variant="ico" icon={{ icon: Ri24HoursFill }}></Button>
        <Button
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          iconTheme="secondary"
        ></Button>
        <Button
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          iconTheme="gray"
        ></Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">boutton</Button>
        <Button size="large" variant="outline">
          boutton
        </Button>
        <Button size="large" variant="secondary">
          boutton
        </Button>
        <Button size="large" variant="disabled" disabled>
          boutton
        </Button>
        <Button
          size="large"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
        ></Button>
        <Button
          size="large"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          iconTheme="secondary"
        ></Button>
        <Button
          size="large"
          variant="ico"
          icon={{ icon: Ri24HoursFill }}
          iconTheme="gray"
        ></Button>
      </div>
    </>
  );
}
