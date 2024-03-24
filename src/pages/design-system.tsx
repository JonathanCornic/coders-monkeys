// COMPONENT
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typographiy } from "@/ui/design-system/typography/typography";

// ICO
import { RiNotification2Fill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Design system du projet" />

      <Layout>
        <Container className="py-10 space-y-10">
          {/* {Typography} */}
          <div className="space-y-2">
            <Typographiy variant="caption2" weigth="medium">
              Typography
            </Typographiy>
            <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
              <div className="pb-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  Display
                </Typographiy>
                <Typographiy variant="display">
                  Nothing is impossible
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  H1
                </Typographiy>
                <Typographiy variant="h1">
                  Nothing is impossible, the word itself says, I'm possible!
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  H2
                </Typographiy>
                <Typographiy variant="h2">
                  Your time is limited, so don't waste it living someone else's
                  life
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  H3
                </Typographiy>
                <Typographiy variant="h3">
                  Daily Report: Removing Checks to the Power of the Internet
                  Titans
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  H4
                </Typographiy>
                <Typographiy variant="h4">
                  Daily Report: Removing Checks to the Power of the Internet
                  Titans
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  H5
                </Typographiy>
                <Typographiy variant="h5">
                  Daily Report: Removing Checks to the Power of the Internet
                  Titans
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  Lead
                </Typographiy>
                <Typographiy variant="lead">
                  Nothing is impossible, the word itself says, I’m possible!
                </Typographiy>
                <Typographiy variant="lead" weigth="medium">
                  Nothing is impossible, the word itself says, I’m possible!
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  Body lg
                </Typographiy>
                <Typographiy variant="body-lg">
                  When I was 5 years old, my mother always told me that
                  happiness was the key to life. When I went to school, they
                  asked me what I wanted to be when I grew up.
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  Body base
                </Typographiy>
                <Typographiy variant="body-base">
                  When I was 5 years old, my mother always told me that
                  happiness was the key to life. When I went to school, they
                  asked me what I wanted to be when I grew up.
                </Typographiy>
              </div>
              <div className="py-5 space-y-2">
                <Typographiy variant="caption3" weigth="medium">
                  Body sm
                </Typographiy>
                <Typographiy variant="body-sm">
                  When I was 5 years old, my mother always told me that
                  happiness was the key to life. When I went to school, they
                  asked me what I wanted to be when I grew up. I wrote down
                  ‘happy’.
                </Typographiy>
              </div>
              <div className="flex divide-x-2 divide-gray-400">
                <div className="py-5 pr-10 space-y-2">
                  <Typographiy variant="caption3" weigth="medium">
                    Caption1
                  </Typographiy>
                  <Typographiy variant="caption1" weigth="medium">
                    Medium
                  </Typographiy>
                  <Typographiy variant="caption1">Regular</Typographiy>
                </div>
                <div className="py-5 px-10 space-y-2">
                  <Typographiy variant="caption3" weigth="medium">
                    Caption2
                  </Typographiy>
                  <Typographiy variant="caption2" weigth="medium">
                    Medium
                  </Typographiy>
                  <Typographiy variant="caption2">Regular</Typographiy>
                </div>
                <div className="py-5 px-10 space-y-2">
                  <Typographiy variant="caption3" weigth="medium">
                    Caption3
                  </Typographiy>
                  <Typographiy variant="caption3" weigth="medium">
                    Medium
                  </Typographiy>
                  <Typographiy variant="caption3">Regular</Typographiy>
                </div>
                <div className="py-5 px-10 space-y-2">
                  <Typographiy variant="caption3" weigth="medium">
                    Caption4
                  </Typographiy>
                  <Typographiy variant="caption4" weigth="medium">
                    Medium
                  </Typographiy>
                  <Typographiy variant="caption4">Regular</Typographiy>
                </div>
              </div>
            </div>
          </div>

          {/* {Spinner} */}
          <div className="space-y-2">
            <Typographiy variant="caption2" weigth="medium">
              Spinners
            </Typographiy>
            <div className="flex gap-2 p-5 border border-gray-400 rounded">
              <div className="flex items-center justify-center gap-4 border border-gray-400 rounded w-48 h-20">
                <Spinner size="small" />
                <Spinner />
                <Spinner size="large" />
              </div>
            </div>
          </div>

          {/* {Avatar} */}
          <div className="space-y-2">
            <Typographiy variant="caption2" weigth="medium">
              Avatar
            </Typographiy>
            <div className="flex gap-2 p-5 border border-gray-400 rounded">
              <div className="flex items-center justify-center gap-4 p-5 border border-gray-400 rounded">
                <Avatar
                  size="small"
                  src="/assets/images/avatar.png"
                  alt="avatar"
                />
                <Avatar src="/assets/images/avatar.png" alt="avatar" />
                <Avatar
                  size="large"
                  src="/assets/images/avatar.png"
                  alt="avatar"
                />
              </div>
            </div>
          </div>

          {/* {Logo} */}
          <div className="space-y-2">
            <Typographiy variant="caption2" weigth="medium">
              Logo
            </Typographiy>
            <div className="flex gap-2 p-5 border border-gray-400 rounded">
              <div className="flex items-center justify-center gap-4 p-5 border border-gray-400 rounded">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo />
                <Logo size="large" />
              </div>
            </div>
          </div>

          {/* {Boutton} */}
          <div className="space-y-2">
            <Typographiy variant="caption2" weigth="medium">
              Buttons
            </Typographiy>
            <div className="flex flex-col gap-2 p-5 border border-gray-400 rounded">
              <Typographiy variant="caption2" weigth="medium">
                Small
              </Typographiy>

              <div className="flex items-center gap-2 py-2">
                <Button variant="accent" size="small" isLoading>
                  Accent
                </Button>
                <Button
                  variant="accent"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                  iconPosition="left"
                  isLoading
                >
                  Accent
                </Button>
                <Button variant="secondary" size="small" isLoading>
                  secondary
                </Button>
                <Button
                  variant="ico"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button variant="outline" size="small" isLoading>
                  Outline
                </Button>
                <Button variant="disabled" size="small" disabled isLoading>
                  Disabled
                </Button>
              </div>

              <div className="flex items-center gap-2 py-2">
                <Button variant="accent" size="small">
                  Accent
                </Button>
                <Button
                  variant="accent"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button variant="secondary" size="small">
                  secondary
                </Button>
                <Button
                  variant="ico"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="small"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button variant="outline" size="small">
                  Outline
                </Button>
                <Button variant="disabled" size="small" disabled>
                  Disabled
                </Button>
              </div>
              <Typographiy variant="caption2" weigth="medium">
                Medium
              </Typographiy>

              <div className="flex items-center gap-2 py-2">
                <Button variant="accent" isLoading>
                  Accent
                </Button>
                <Button
                  variant="accent"
                  icon={{ icon: RiNotification2Fill }}
                  iconPosition="left"
                  isLoading
                >
                  Accent
                </Button>
                <Button variant="secondary" isLoading>
                  secondary
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button variant="outline" isLoading>
                  Outline
                </Button>
                <Button variant="disabled" disabled isLoading>
                  Disabled
                </Button>
              </div>

              <div className="flex items-center gap-2 py-2">
                <Button variant="accent">Accent</Button>
                <Button
                  variant="accent"
                  icon={{ icon: RiNotification2Fill }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button variant="secondary">secondary</Button>
                <Button variant="ico" icon={{ icon: RiNotification2Fill }} />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button variant="outline">Outline</Button>
                <Button variant="disabled" disabled>
                  Disabled
                </Button>
              </div>

              <Typographiy variant="caption2" weigth="medium">
                Large
              </Typographiy>

              <div className="flex items-center gap-2 py-2">
                <Button variant="accent" size="large" isLoading>
                  Accent
                </Button>
                <Button
                  variant="accent"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                  iconPosition="left"
                  isLoading
                >
                  Accent
                </Button>
                <Button variant="secondary" size="large" isLoading>
                  secondary
                </Button>
                <Button
                  variant="ico"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                  isLoading
                />
                <Button variant="outline" size="large" isLoading>
                  Outline
                </Button>
                <Button variant="disabled" size="large" disabled isLoading>
                  Disabled
                </Button>
              </div>

              <div className="flex items-center gap-2 py-2">
                <Button variant="accent" size="large">
                  Accent
                </Button>
                <Button
                  variant="accent"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button variant="secondary" size="large">
                  secondary
                </Button>
                <Button
                  variant="ico"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="large"
                  icon={{ icon: RiNotification2Fill }}
                />
                <Button variant="outline" size="large">
                  Outline
                </Button>
                <Button variant="disabled" size="large" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
