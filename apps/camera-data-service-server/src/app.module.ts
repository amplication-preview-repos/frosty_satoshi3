import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { WorkspaceModule } from "./workspace/workspace.module";
import { RecognitionModelModule } from "./recognitionModel/recognitionModel.module";
import { ApiSettingModule } from "./apiSetting/apiSetting.module";
import { CameraModule } from "./camera/camera.module";
import { RuleModule } from "./rule/rule.module";
import { NotificationModule } from "./notification/notification.module";
import { ZoneModule } from "./zone/zone.module";
import { StatisticModule } from "./statistic/statistic.module";
import { SupportRequestModule } from "./supportRequest/supportRequest.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./rabbitmq/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    ACLModule,
    AuthModule,
    KafkaModule,
    WorkspaceModule,
    RecognitionModelModule,
    ApiSettingModule,
    CameraModule,
    RuleModule,
    NotificationModule,
    ZoneModule,
    StatisticModule,
    SupportRequestModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
