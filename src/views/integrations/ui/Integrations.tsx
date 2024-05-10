import { GenerateLauncherDialog } from "@/widgets/generate-launcher-dialog";
import { ChooseAuthenticationMethodDialog } from "@/widgets/choose-authentication-method-dialog";
import { ConnectTexturesDialog } from "@/widgets/connect-textures-dialog";
import { ConnectSentryDialog } from "@/widgets/connect-sentry-dialog";

import { IntegrationCard } from "@/entities/IntegrationCard";

import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { DASHBOARD_PAGES } from "@/shared/routes";

export const IntegrationsPage = () => {
  return (
    <>
      <Breadcrumbs
        current={"Интеграции"}
        breadcrumbs={[{ value: "Главная", path: DASHBOARD_PAGES.HOME }]}
      />
      <div className="flex flex-col items-start py-4">
        <div className="flex justify-between w-full">
          <h1 className="text-xl font-bold mb-8">Интеграции</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <IntegrationCard
            title="Аутентификация"
            description="Синхронизация и управление данными о пользователях на платформе"
            dialog={<ChooseAuthenticationMethodDialog />}
          />
          <IntegrationCard
            title="Сборка лаунчера"
            description="Создайте лаунчер для платформ Windows, MacOS и Linux в пару кликов"
            dialog={<GenerateLauncherDialog />}
          />
          <IntegrationCard
            title="Сервис скинов"
            description="Добавь интеграцию со сервисом скинов, для отображения скинов и плащей в игре"
            dialog={<ConnectTexturesDialog />}
          />
          <IntegrationCard
            title="Sentry"
            description={"Подключение платформы для отслеживания ошибок и мониторинга приложений"}
            dialog={<ConnectSentryDialog />}
          />
          <IntegrationCard
            title="Discord"
            description="Синхронизация лаунчера и вашего Discord сервера"
          />
          <IntegrationCard
            title="Нужен сервис?"
            description="Отправь заявку, а мы придумаем что-нибудь"
          />
        </div>
      </div>
    </>
  );
};